// Define an array of selectors
const selectors = [
  '#box',
  'button',
  '#portrait-div',
  '#nadpis',
  '#ib',
  '#ib-text',
  '#experience-header',
  '.category1>.polozka',
  '.category2>.polozka',
  '.category3>.polozka'
];

// Create an intersection observer
let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // If entry (element) is in view
    if (entry.isIntersecting) {
      entry.target.classList.add("loaded");
      observer.unobserve(entry.target);
    }
  });
});

// Iterate over the selectors and observe each element
selectors.forEach(selector => {
  document.querySelectorAll(selector).forEach(currentlyObservedElement => {
    observer.observe(currentlyObservedElement);
  });
});
