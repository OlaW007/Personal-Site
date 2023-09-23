// Define selectors with their respective thresholds
const selectorsWithThreshold = [
  { selector: '#box', threshold: 0 },
  { selector: 'button', threshold: 0 },
  { selector: '#portrait-div', threshold: 0 },
  { selector: '#nadpis', threshold: 0 },
  { selector: '#ib', threshold: 0 },
  { selector: '#ib-text', threshold: 0.048},
  { selector: '.category1>.polozka', threshold: 0 },
  { selector: '.category2>.polozka', threshold: 0 },
  { selector: '.category3>.polozka', threshold: 0 },
  { selector: '#experience-header', threshold: 0.95 },
  
];

// Iterate over the array and create an observer for each item
selectorsWithThreshold.forEach(({ selector, threshold }) => {
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return;

  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.id === 'experience-header') {
          entry.target.querySelectorAll('.pismeno').forEach(child => child.classList.add("loaded"));
        } else {
          entry.target.classList.add("loaded");
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold });

  elements.forEach(element => observer.observe(element));
});


