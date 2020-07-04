/**
 * Finish the PlayerStatus component so that it follows the current status of the player.

The status can be either "online" or "away". When the component first renders, the player should be "online". The toggleStatus function should change the status variable.

The component should count how many times the user changed their status, using the counter. When the component first renders, the counter should be 1. The counter should be updated within React.useEffect when status changes.

For example, after the first render, the div element with id root should look like this:

<div>
  <h1>online</h1>
  <h3>1</h3>
  <button>Toggle status</button>
</div>
*
*
*/

function PlayerStatus() {
  const [status, setStatus] = React.useState("online");
  const [counter, setCounter] = React.useState(0);

  // Toggle between the two status values - 'away' and 'online'
  function toggleStatus() {
    // Write your code here
  }
  
  // Implement effect hook below.
  // Update the counter when status changes.
  React.useEffect(() => {}); 

  return (
    <div>
      <h1>{status}</h1>
      <h3>{counter}</h3>
      <button onClick={toggleStatus}>Toggle status</button>
    </div>
  );
};


document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<PlayerStatus />, rootElement);
setTimeout(() => console.log(rootElement.innerHTML), 300);