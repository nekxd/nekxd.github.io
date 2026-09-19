(function() {
    var activated = false;
    var audioDdlc = new Audio('https://ynd.su/ddlc.mp3');
    var audioJust = new Audio('https://ynd.su/justedro.mp3');
    audioJust.loop = true;

    // Load fonts properly via CDN
    var linkAller = document.createElement('link');
    linkAller.rel = 'stylesheet';
    linkAller.href = 'https://fonts.cdnfonts.com/css/aller';
    document.head.appendChild(linkAller);

    var linkRiffic = document.createElement('link');
    linkRiffic.rel = 'stylesheet';
    linkRiffic.href = 'https://fonts.cdnfonts.com/css/riffic-free';
    document.head.appendChild(linkRiffic);

    function showPopup(playSound) {
        if (document.getElementById('monika-popup')) return;

        var overlay = document.createElement('div');
        overlay.id = 'monika-popup';
        overlay.style.position = 'fixed';
        overlay.style.top = '0'; overlay.style.left = '0';
        overlay.style.width = '100vw'; overlay.style.height = '100vh';
        overlay.style.backgroundColor = 'rgba(255,255,255,0.01)';
        overlay.style.zIndex = '9999999';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';

        var box = document.createElement('div');
        box.style.border = '4px solid #fbbde1';
        box.style.backgroundColor = '#fdf4f9';
        // Reduced width and padding for the popup
        box.style.padding = '20px';
        box.style.textAlign = 'center';
        box.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
        box.style.width = '260px'; box.style.height = '210px'; box.style.display = 'flex'; box.style.flexDirection = 'column'; box.style.justifyContent = 'center'; box.style.alignItems = 'center'; box.style.boxSizing = 'border-box';
        

        var text = document.createElement('div');
        text.innerText = 'Just Monika.';
        text.style.fontFamily = "Aller, sans-serif";
        text.style.fontSize = '26px';
        text.style.color = '#000';
        text.style.marginBottom = '25px';

        var btn = document.createElement('button');
        btn.innerText = 'OK';
        btn.style.fontFamily = "Riffic Free, Riffic Bold, sans-serif";
        btn.style.fontSize = '38px';
        btn.style.backgroundColor = 'transparent';
        btn.style.border = 'none';
        btn.style.color = '#ffffff';
        btn.style.fontWeight = 'bold';
        btn.style.webkitTextStroke = '2px #b67699';
        btn.style.textShadow = '2px 2px 0 #b67699, -2px -2px 0 #b67699, 2px -2px 0 #b67699, -2px 2px 0 #b67699, 0px 4px 0 #b67699';
        btn.style.cursor = 'pointer';
        btn.style.outline = 'none';

        box.appendChild(text);
        box.appendChild(btn);
        overlay.appendChild(box);
        document.body.appendChild(overlay);

        if (playSound) {
            audioDdlc.currentTime = 0;
            audioDdlc.play().catch(function(e){console.log('Audio error:', e);});
        }

        btn.onclick = function(e) {
            e.stopPropagation();
            overlay.remove();
            if (playSound) {
                audioDdlc.pause();
                if (!activated) {
                    activateMonika();
                }
            }
        };
    }

    function activateMonika() {
        activated = true;
        audioJust.currentTime = 0;
        audioJust.play().catch(function(e){console.log('Audio error:', e);});

        var imgUrl = 'https://cdn.openvk.org/0c/0ca1acf9a416529a101c8dcd8a8bbb52b1cb4596376b91ed56032e03f1f146c0903e8c57915c61eae49238820f9ae0dc0bab4d2e73f0d5c0787b4f2f90cc5e0e_cropped/larger.jpeg';

        // 1. Replace all images
        var imgs = document.querySelectorAll('img');
        for(var i=0; i<imgs.length; i++) {
            imgs[i].src = imgUrl;
            imgs[i].srcset = '';
        }
        
        // 2. Replace all backgrounds
        var all = document.querySelectorAll('*');
        for(var j=0; j<all.length; j++) {
            var el = all[j];
            if (el.id === 'monika-popup' || el.parentElement && el.parentElement.id === 'monika-popup') continue;
            var bg = window.getComputedStyle(el).backgroundImage;
            if (bg && bg !== 'none' && bg !== 'initial') {
                el.style.backgroundImage = 'url("' + imgUrl + '")';
            }
        }

        // 3. Replace text
        function replaceTextNodes(node) {
            if (node.id === 'monika-popup') return;
            if (node.nodeType === 3) {
                if (node.nodeValue.trim() !== '') {
                    node.nodeValue = 'Just Monika.';
                }
            } else {
                for (var k = 0; k < node.childNodes.length; k++) {
                    replaceTextNodes(node.childNodes[k]);
                }
            }
        }
        replaceTextNodes(document.body);

        // 4. Intercept clicks on buttons and links
        document.body.addEventListener('click', function(e) {
            var target = e.target.closest('button, a, input, [role="button"], [role="link"], [role="menuitem"], .btn');
            if (target && target.id !== 'monika-popup' && !target.closest('#monika-popup')) {
                e.preventDefault();
                e.stopPropagation();
                showPopup(true);
            }
        }, true);
    }

    Object.defineProperty(window, 'monika', {
        get: function() {
            showPopup(true);
            return "Just Monika.";
        }
    });
})();
