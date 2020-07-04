// https://upmostly.com/tutorials/modal-components-react-custom-hooks?fbclid=IwAR0dNqjYaZ_rbFzQ1r5gIZFm3R3KdOcCePsLwxYevzMexVuB8oFx6X9FwnA

import { useState } from 'react';


// custom hook to reuse a modal
export default useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};
