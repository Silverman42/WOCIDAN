/**
 * Intersection observers for animating content when they are in view
 */
export const OberverModule = {
  /**
   * MakeObserver
   * @description: Uses the class name of the entry element to apply the observer
   * @param {String} addedClass (New html class to be added to the observed element)
   */
  MakeObserver(addedClass) {
    // Check if observer API is available on Browser
    if ('IntersectionObserver' in window) {
      // return new instance of observer API
      return new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element to be observed
            const target = entry.target
            target.classList.add(addedClass)
            observer.unobserve(target)
          }
        })
      })
    }
  },
  /**
   * ObserveElement
   * @description: Trigger Observer API to observe the element
   * @param {String} observedElementClass (Element to be observed)
   * @param  {String} addedClass (Classes to be added after the element has been observed)
   */
  ObserveElement(observedElementClass, addedClass) {
    const elementObserver = this.MakeObserver(addedClass)
    const elements = Array.from(document.querySelectorAll(observedElementClass))
    elements.forEach(function (element) {
      elementObserver.observe(element)
    })
  },
}
