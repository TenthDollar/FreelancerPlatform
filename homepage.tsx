
 Stylize Code?
Toggle Wrap
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <meta name="viewport" content=
  "width=device-width, initial-scale=1.0">
  <title>TenthDollar | Hire Freelancers for any Project</title>
  <meta name="description" content=
  "Connect with skilled freelancers and service providers for your business needs. Find web developers, designers, writers, marketers and more on TenthDollar.com.">
  <meta name="keywords" content=
  "freelance, services, gigs, hire freelancers, web development, design, writing, marketing">
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://tenthdollar.com/">
  <meta property="og:title" content=
  "TenthDollar | Find Expert Freelancers &amp; Services">
  <meta property="og:description" content=
  "Connect with skilled freelancers and service providers for your business needs.">
  <meta property="og:image" content="/og-image.jpg">
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://tenthdollar.com/">
  <meta property="twitter:title" content=
  "TenthDollar | Find Expert Freelancers &amp; Services">
  <meta property="twitter:description" content=
  "Connect with skilled freelancers and service providers for your business needs.">
  <meta property="twitter:image" content="/og-image.jpg">
  <!-- Preconnect to critical domains -->
  <link rel="preconnect" href=
  "https://yvasszjptawyqalpqrzp.supabase.co">
  <link rel="dns-prefetch" href=
  "https://yvasszjptawyqalpqrzp.supabase.co">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="dns-prefetch" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://images.unsplash.com"
  crossorigin="">
  <link rel="dns-prefetch" href="https://images.unsplash.com">
  <!-- Critical CSS for layout stability -->

  <style>
      html { scroll-behavior: smooth; }
      body { margin: 0; min-height: 100vh; overflow-x: hidden; }
      img { max-width: 100%; height: auto; transform: translateZ(0); }
      
      /* Prevent FOUC (Flash of Unstyled Content) */
      .no-fouc { opacity: 0; }
      .fouc-ready { opacity: 1; transition: opacity 0.1s ease-in; }

      /* Basic image stability */
      img {
        content-visibility: auto;
        contain: paint style layout;
        contain-intrinsic-size: auto 300px;
        will-change: transform;
      }
  </style><!-- Fix image loading -->

  <script>
      // Performance marking
      window.performance.mark('init-start');
      
      // Helper function to ensure proper image loading
      window.handleImageErrors = function() {
        document.querySelectorAll('img').forEach(img => {
          if (!img.hasAttribute('data-error-handled')) {
            img.setAttribute('data-error-handled', 'true');
            
            // Add decoding attribute if missing
            if (!img.hasAttribute('decoding')) {
              img.setAttribute('decoding', 'async');
            }
            
            // Add loading attribute if missing
            if (!img.hasAttribute('loading')) {
              img.setAttribute('loading', 'lazy');
            }
            
            img.onerror = function() {
              // Replace with a default image if loading fails
              if (!this.src.includes('placeholder') && !this.src.includes('data:image')) {
                this.src = '/placeholder.svg';
              }
            };
          }
        });
      };

      // Save scroll position before page unload
      window.addEventListener('beforeunload', function() {
        try {
          sessionStorage.setItem('scrollPosition', window.scrollY.toString());
        } catch (e) {
          console.warn('Failed to save scroll position', e);
        }
      });
      
      // Restore scroll position on page load
      window.addEventListener('DOMContentLoaded', function() {
        try {
          const scrollPosition = sessionStorage.getItem('scrollPosition');
          if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition));
            sessionStorage.removeItem('scrollPosition');
          }
          
          // Performance marking
          window.performance.mark('dom-loaded');
          window.performance.measure('dom-complete', 'init-start', 'dom-loaded');
        } catch (e) {
          console.warn('Failed to restore scroll position', e);
        }
      });
      
      // Create IntersectionObserver to prevent loading off-screen images
      document.addEventListener('DOMContentLoaded', function() {
        try {
          const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const img = entry.target;
                // Only set src if it's a data attribute
                const dataSrc = img.getAttribute('data-src');
                if (dataSrc) {
                  img.src = dataSrc;
                  img.removeAttribute('data-src');
                }
                observer.unobserve(img);
              }
            });
          });
          
          // Apply to images with data-src attribute
          document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
          });
        } catch (e) {
          console.warn('IntersectionObserver not supported, falling back', e);
          // Fallback: load all images immediately
          document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.getAttribute('data-src') || '';
          });
        }
      });
  </script>
  <script type="module" crossorigin="" src=
  "/assets/index-BKTCrBAB.js"></script>
  <link rel="stylesheet" crossorigin="" href=
  "/assets/index-DsZ0DZ8j.css">
</head>
<body class="no-fouc">
  <div id="root"></div>
  <script>
      document.addEventListener('DOMContentLoaded', function() {
        // Initialize image error handling
        window.handleImageErrors();
        
        // Remove FOUC prevention class
        setTimeout(() => {
          document.body.classList.remove('no-fouc');
          document.body.classList.add('fouc-ready');
        }, 100);
        
        // Observe DOM changes to handle dynamically added images
        const observer = new MutationObserver(function(mutations) {
          window.handleImageErrors();
          
          // Check for specific new elements
          mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
              if (node.nodeType === 1 && node.tagName === 'IMG') {
                // Add stability attributes to new images
                if (!node.hasAttribute('decoding')) node.setAttribute('decoding', 'async');
                if (!node.hasAttribute('loading')) node.setAttribute('loading', 'lazy');
              }
            });
          });
        });
        
        // Start observing
        observer.observe(document.body, { 
          childList: true, 
          subtree: true 
        });
        
        // Performance marking
        window.performance.mark('fully-loaded');
        window.performance.measure('total-load-time', 'init-start', 'fully-loaded');
      });
  </script>
</body>
</html>
