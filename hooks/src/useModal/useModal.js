import { useState } from 'react'

/**
 * 
 * 1. Instantiate new isShowing and setIsShowing state values to store the current view state of the modal
 * 2. Declare a function toggle that changes the value of isShowing to be the opposite of what it is currently
 * 3. Return the value of isShowing and the toggle function from the Hook, so the component has access to them.
 */
const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const toggle = () =>  setIsShowing(!isShowing);
  return {
    isShowing, toggle,
  }
}

export default useModal;