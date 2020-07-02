 const Textvideo = (props) => {
  return (
    <>
      <div >
 
        <video autoplay playsInline muted loop preload 
          {
            (props.poster) ? poster=props.poster : poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
          }
          >
          {/* <source {(props.sm)? src=props.sm : src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" /> */}
          <source src="http://thenewcode.com/assets/videos/ocean-small.mp4"}  />
        </video>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%" >
                  <rect x="0" y="0" width="100%" height="100%" />
                  <text x="72"  y="50">{props.text}</text>
              </mask>
            </defs>
          <rect x="0" y="0" width="100%" height="100%" />
        </svg>
    </div>
    <style jsx>{`  
    
    div video {
      width: 100%;
    }
    div svg {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
    div svg text {
      font-family: Biko, sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 38px;
    }
    div svg rect {
      fill: white;
    }
    div svg > rect {
      -webkit-mask: url(#mask);
      mask: url(#mask);
    }
    `}</style>
    </>
  );
}


export default Textvideo;