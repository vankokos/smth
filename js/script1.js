// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(progress1, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#000000',
    trailColor: '#F0F0F0',
    trailWidth: 5,
    svgStyle: {width: '370px', height: '3px'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#1D1D1D',
        position: 'relative',
        right: '0',
        left: '300px',
        top: '22px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  
bar.animate(0.9);  // Number from 0.0 to 1.0
