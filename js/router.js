// spa-router.js
export class Router {
    constructor(routes = [], rootElement = document.body, options = {}) {
      this.routes = routes;
      this.rootElement = rootElement;
      this.currentComponent = null;
      this.options = {
        basePath: '',
        ...options
      };
      
      this._processRoutes();
      
      this.navigate = this.navigate.bind(this);
      this.handlePopState = this.handlePopState.bind(this);
      this.handleLinkClick = this.handleLinkClick.bind(this);
      this.handleRouterNavigate = this.handleRouterNavigate.bind(this);
      
      // Initialize
      this.init();
    }
    
    _processRoutes() {
      this.routes = this.routes.map(route => {
        if (route.path instanceof RegExp || !route.path.includes(':')) {
          return route;
        }
        
        const paramNames = [];
        const regexPattern = route.path.replace(/:([^\/]+)/g, (match, paramName) => {
          paramNames.push(paramName);
          return '([^/]+)';
        });
        return {
          ...route,
          originalPath: route.path,
          path: new RegExp(`^${regexPattern}$`),
          paramNames
        };
      });
    }
    
    init() {
      if (!document.querySelector('base')) {
        const baseEl = document.createElement('base');
        baseEl.href = window.location.origin + this.options.basePath;
        document.head.prepend(baseEl);
      }
      
      window.addEventListener('popstate', this.handlePopState);
      
      document.addEventListener('click', this.handleLinkClick);
      
      window.addEventListener('router-navigate', this.handleRouterNavigate);
      
      this.handlePopState();
    }
    
    handleRouterNavigate(event) {
      if (event.detail && event.detail.path) {
        this.navigate(event.detail.path);
        console.log("hello from router");
      }
    }
    
    handleLinkClick(e) {
      // Find if a link was clicked or if a child of a link was clicked
      let element = e.target;
      while (element && element.tagName !== 'A') {
        element = element.parentElement;
      }
      
      // Process link if found
      if (element && element.tagName === 'A') {
        const href = element.getAttribute('href');
        
        // Only process internal links (not external, anchors, etc.)
        if (href && 
            href.startsWith('/') && 
            !href.startsWith('//') && 
            !element.getAttribute('target') && 
            !element.getAttribute('download') &&
            !element.hasAttribute('data-external')) {
          
          e.preventDefault(); // Prevent default browser navigation
          this.navigate(href);
        }
      }
    }
    
    handlePopState() {
      const path = window.location.pathname.replace(this.options.basePath, '');
      this.loadRoute(path);
    }
    
    navigate(path) {
      // Update browser history
      window.history.pushState(null, '', this.options.basePath + path);
      
      // Load the new route
      this.loadRoute(path);
    }
    
    loadRoute(path) {
      // Find matching route
      let matchedRoute = null;
      let routeParams = {};

      console.log(this.routes);
      
      for (const route of this.routes) {
        if (typeof route.path === 'string') {
          if (route.path === path) {
            matchedRoute = route;
            console.log(matchedRoute)
            break;
          }
        } else if (route.path instanceof RegExp) {
          const matches = path.match(route.path);
          if (matches) {
            matchedRoute = route;
            
            // Extract named parameters if available
            if (route.paramNames) {
              route.paramNames.forEach((name, index) => {
                routeParams[name] = matches[index + 1];
              });
            } else {
              // Fallback for raw regex routes without named params
              routeParams = matches.slice(1);
            }
            break;
          }
        }
      }
      
      if (matchedRoute) {
        // Clear previous component if exists
        if (this.currentComponent && this.rootElement.contains(this.currentComponent)) {
          this.rootElement.removeChild(this.currentComponent);
        }
        
        // Create and render new component
        const Component = matchedRoute.component;
        let componentInstance;
        
        if (typeof Component === 'function') {
          // If component is a constructor function or class
          componentInstance = new Component();
        } else if (typeof Component === 'string') {
          // If component is a tag name
          componentInstance = document.createElement(Component);
        } else {
          console.error('Invalid component type');
          return;
        }
        
        // Assign route parameters to the component
        componentInstance.params = routeParams;
        
        this.currentComponent = componentInstance;
        this.rootElement.appendChild(componentInstance);
        
        window.dispatchEvent(new CustomEvent('route-changed', { 
          detail: { path, component: componentInstance, params: routeParams } 
        }));
      } else {
        // Handle 404
        console.warn(`No route found for: ${path}`);
        // Find if we have a not-found route
        const notFoundRoute = this.routes.find(r => 
          (typeof r.path === 'string' && r.path === '/not-found') || 
          (r.originalPath === '/not-found')
        );
        if (notFoundRoute && path !== '/not-found') {
          this.navigate('/not-found');
        }
      }
    }
  }