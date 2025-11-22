document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('strips-container');
    const stripWidth = 400 / 7;
    
    const strips = [
        { text: 'peace of mind', stubHeight: 25 },
        { text: 'courage', stubHeight: 18 },
        { text: 'good news', stubHeight: 30 },
        { text: '', stubHeight: 15 },
        { text: 'happiness', stubHeight: 22 },
        { text: 'a break', stubHeight: 28 },
        { text: 'patience', stubHeight: 20 }
    ];
    
    const tornPatterns = [
        "M0,2 L18,10 L28,4 L45,12 L58,3 L72,11 L88,5 L100,9 L100,12 L0,12 Z",
        "M0,5 L12,12 L32,2 L48,11 L62,4 L81,12 L95,3 L100,10 L100,12 L0,12 Z",
        "M0,1 L22,11 L38,5 L52,12 L68,2 L86,10 L100,4 L100,12 L0,12 Z",
        "M0,6 L10,12 L28,3 L44,11 L60,5 L77,12 L93,2 L100,11 L100,12 L0,12 Z",
        "M0,3 L20,12 L35,4 L58,11 L72,2 L90,12 L100,5 L100,12 L0,12 Z",
        "M0,4 L15,11 L30,3 L50,12 L65,5 L84,11 L96,4 L100,12 L100,12 L0,12 Z",
        "M0,7 L25,12 L40,4 L55,11 L70,3 L80,12 L94,5 L100,10 L100,12 L0,12 Z"
    ];
    
    strips.forEach(function(stripData, i) {
        const stripDiv = document.createElement('div');
        stripDiv.className = 'strip';
        stripDiv.style.left = (i * stripWidth) + 'px';
        stripDiv.style.width = stripWidth + 'px';
        stripDiv.style.pointerEvents = (i === 3) ? 'none' : 'auto';
        
        // For strip 3 (index 3) - SHOW STUB ONLY
        if (i === 3) {
            const stubDiv = document.createElement('div');
            stubDiv.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: ${stripData.stubHeight}px;
                background-color: #f3f4f6;
            `;
            
            const svgNS = 'http://www.w3.org/2000/svg';
            const svg = document.createElementNS(svgNS, 'svg');
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '12');
            svg.setAttribute('viewBox', '0 0 100 12');
            svg.setAttribute('preserveAspectRatio', 'none');
            svg.style.cssText = 'position: absolute; bottom: -1px; display: block;';
            
            const path = document.createElementNS(svgNS, 'path');
            path.setAttribute('d', tornPatterns[i]);
            path.setAttribute('fill', '#f3f4f6');
            svg.appendChild(path);
            stubDiv.appendChild(svg);
            
            stripDiv.appendChild(stubDiv);
        } else {
            // ALL OTHER STRIPS - show full strip
            const fullDiv = document.createElement('div');
            fullDiv.className = 'strip-full';
            
            const textDiv = document.createElement('div');
            textDiv.className = 'strip-text';
            textDiv.textContent = stripData.text;
            
            fullDiv.appendChild(textDiv);
            stripDiv.appendChild(fullDiv);
            
            // When clicked, REPLACE with stub
            stripDiv.addEventListener('click', function() {
                if (!stripDiv.classList.contains('tearing')) {
                    stripDiv.classList.add('tearing');
                    fullDiv.style.animation = 'tear 0.6s ease-in forwards';
                    
                    // CREATE STUB IMMEDIATELY
                    const stubDiv = document.createElement('div');
                    stubDiv.style.cssText = `
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: ${stripData.stubHeight}px;
                        background-color: #f3f4f6;
                        z-index: 1;
                    `;
                    
                    const svgNS = 'http://www.w3.org/2000/svg';
                    const svg = document.createElementNS(svgNS, 'svg');
                    svg.setAttribute('width', '100%');
                    svg.setAttribute('height', '12');
                    svg.setAttribute('viewBox', '0 0 100 12');
                    svg.setAttribute('preserveAspectRatio', 'none');
                    svg.style.cssText = 'position: absolute; bottom: -1px; display: block;';
                    
                    const path = document.createElementNS(svgNS, 'path');
                    path.setAttribute('d', tornPatterns[i]);
                    path.setAttribute('fill', '#f3f4f6');
                    svg.appendChild(path);
                    stubDiv.appendChild(svg);
                    
                    stripDiv.appendChild(stubDiv);
                    
                    setTimeout(function() {
                        stripDiv.removeChild(fullDiv);
                        stripDiv.classList.remove('tearing');
                        stripDiv.style.pointerEvents = 'none';
                    }, 600);
                }
            });
        }
        
        container.appendChild(stripDiv);
    });
});