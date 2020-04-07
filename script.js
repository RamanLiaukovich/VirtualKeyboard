const keyMap = new Map ([
    ['Backspace', 'backspace'],
    ['Tab', 'keyboard_tab'],
    ['CapsLock', 'keyboard_capslock'],
    ['Enter', 'keyboard_return'],
    ['Shift', '↑ shift'],
    ['Shift', 'shift ↑'],
    ['ArrowUp', 'keyboard_arrow_up'],
    ['ArrowLeft', 'keyboard_arrow_left'],
    ['ArrowDown', 'keyboard_arrow_down'],
    ['ArrowRight', 'keyboard_arrow_right'],
    ['Control', 'ctrl'],
    ['Alt', 'alt'],
    [' ', 'space_bar'],
    ['Delete', 'del'],
 ]);

const keyboard = {
    elements: {
        textarea: null,
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {

    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        this.elements.textarea = document.createElement('textarea');
        this.elements.textarea.classList.add('input');
        document.body.append(this.elements.textarea);
        // keyboard.elements.textarea.value = keyboard.properties.value;


        this.elements.main = document.createElement('div');
        this.elements.keysContainer = document.createElement('div');
        
        this.elements.main.classList.add('keyboard');   
        this.elements.keysContainer.classList.add('keyboard__keys');
        this.elements.keysContainer.append(this.createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll('.key');
        
    
        this.elements.main.append(this.elements.keysContainer);
        document.body.append(this.elements.main);
    },

    createKeys () {
        const fragment = document.createDocumentFragment();

        const keyLayout = [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "keyboard_tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "del",
            "keyboard_capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "keyboard_return",
            "shift ↑", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "keyboard_arrow_up", "↑ shift",
            "ctrl", "alt", "space_bar", "alt", "ctrl", "keyboard_arrow_left", "keyboard_arrow_down", "keyboard_arrow_right"
        ];

        const createIcon = (icon_name) => {
            return `<span class="material-icons">${icon_name}</span>`;
        };

        keyLayout.forEach(key => {
            let keyElement = document.createElement('button');
            let lineBreak = ["backspace", "del", "keyboard_return", "↑ shift", "keyboard_arrow_right"].indexOf(key) !== -1;


            keyElement.setAttribute('type', 'button');
            keyElement.classList.add('key');

            switch (key) {

                case 'shift ↑':
                    keyElement.classList.add('key__wide');
                    keyElement.textContent = key.toLocaleLowerCase();
             
                
                        keyElement.addEventListener('click', () => {
                            this.properties.value += '';
                            this.triggerEvent('oninput');    
                            event.key = Shift;
                        });


                
                        break; 

                case '↑ shift':
                        keyElement.classList.add('key__wide');
                        keyElement.textContent = key.toLocaleLowerCase();    
                
                        keyElement.addEventListener('click', () => {
                            this.properties.value += '';
                            this.triggerEvent('oninput');    
                        });
                
                        break; 
                
                case 'keyboard_arrow_right':
                    keyElement.classList.add('key');
                    keyElement.innerHTML = createIcon('keyboard_arrow_right');
                
                
                        keyElement.addEventListener('click', () => {
                            this.properties.value += '→';
                            this.triggerEvent('oninput');    
                        });
                
                        break; 
                        
                case 'keyboard_arrow_down':
                    keyElement.classList.add('key');
                    keyElement.innerHTML = createIcon('keyboard_arrow_down');
                
                
                        keyElement.addEventListener('click', () => {
                            this.properties.value += '↓';
                            this.triggerEvent('oninput');    
                        });
                
                        break; 

                case 'keyboard_arrow_left':
                    keyElement.classList.add('key');
                    keyElement.innerHTML = createIcon('keyboard_arrow_left');
                
                
                        keyElement.addEventListener('click', () => {
                            this.properties.value += '←';
                            this.triggerEvent('oninput');    
                        });
                
                        break; 

                case 'keyboard_arrow_up':
                    keyElement.classList.add('key');
                    keyElement.innerHTML = createIcon('keyboard_arrow_up');
                
                
                        keyElement.addEventListener('click', () => {
                            this.properties.value += '↑';
                            this.triggerEvent('oninput');    
                        });
                
                        break; 

                case 'keyboard_arrow_up':
                    keyElement.classList.add('key');
                    keyElement.innerHTML = createIcon('keyboard_arrow_up');
                
                
                        keyElement.addEventListener('click', () => {
                            this.properties.value += '↑';
                            this.triggerEvent('oninput');    
                        });
                
                        break; 

                case 'backspace':
                    keyElement.classList.add('key__wide');
                    keyElement.innerHTML = createIcon('backspace');


                    keyElement.addEventListener('click', () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this.triggerEvent('oninput');
                    });

                    break;

                case 'keyboard_tab':
                    keyElement.classList.add('key__wide');
                    keyElement.innerHTML = createIcon('keyboard_tab');
                
                
                        keyElement.addEventListener('click', () => {
                            this.properties.value += '    ';
                            this.triggerEvent('oninput');    
                        });
                
                        break; 
                
                case 'keyboard_capslock':
                    keyElement.classList.add('key__wide');
                    keyElement.innerHTML = createIcon('keyboard_capslock');
    
    
                    keyElement.addEventListener('click', () => {
                        this.toggleCapsLock();

                    });

                    document.addEventListener('keydown', function(event) {
                        if (event.key === 'CapsLock') {
                            this.properties.capsLock = !this.properties.capsLock;

                        for (const key of this.elements.keys) {
                            if (key.textContent.length === 1) {
                                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
                            }
                        }
                        }
                    });
                    


                    break;
                    
                case 'keyboard_return':
                    keyElement.classList.add('key__wide');
                    keyElement.innerHTML = createIcon('keyboard_return');
        
        
                    keyElement.addEventListener('click', () => {
                        this.properties.value += '\n';
                        this.triggerEvent('oninput');    
                    });
        
                    break;   
                    
                case 'space_bar':
                    keyElement.classList.add('key__extra-wide');
                    keyElement.innerHTML = createIcon('space_bar');
            
            
                    keyElement.addEventListener('click', () => {
                        this.properties.value += ' ';
                        this.triggerEvent('oninput');    
                    });
            
                    break; 

                default:
                    keyElement.textContent = key.toLocaleLowerCase();             
                
                        keyElement.addEventListener('click', () => {
                            // this.properties.value = this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                            this.properties.value += keyElement.textContent;
                            this.triggerEvent('oninput');  
                            console.log(keyElement.textContent);
                            
                        });
                
                        break;     
                
            }

            
            fragment.append(keyElement);   

            if (lineBreak) {
                fragment.append(document.createElement('br'));
            }


        });


        return fragment;
        
    },



    triggerEvent(handlerName) {
        console.log('Event trigered' + handlerName);
    },

    
    toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.textContent.length === 1) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },
    




};


window.addEventListener('DOMContentLoaded', function() {
    keyboard.init();
    // document.querySelector('.textarea').focus();
});

document.addEventListener('keydown', function(event) {

    for (i = 0; i < document.querySelectorAll(".key > span").length; i++) {
        if (document.querySelectorAll(".key > span")[i].innerText === keyMap.get(event.key.toString())) {
            document.querySelectorAll(".key > span")[i].parentElement.classList.add('active');
        } 
        
    }

    for (i = 0; i < document.querySelectorAll('.key').length; i++) {
        
        if (document.querySelectorAll('.key')[i].innerText === event.key) {
            document.querySelectorAll('.key')[i].classList.add('active');
        } else if (document.querySelectorAll(".key")[i].innerText === keyMap.get(event.key.toString())) {
            document.querySelectorAll(".key")[i].classList.add('active');
        }
    }
    
    console.log(event.key.toString());
});

document.addEventListener('keyup', function(event) {
    document.querySelectorAll('.key').forEach(function(element) {
        element.classList.remove('active');
    })
}); 






   




