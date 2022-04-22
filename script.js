        let estrela = document.getElementById('estrela')
        let lua = document.getElementById('lua')
        let montanha_costas = document.getElementById('montanha_costas')
        let text = document.getElementById('text')
        let btn = document.getElementById('btn')
        let montanha_frente = document.getElementById('montanha_frente')
        let header = document.querySelector('header')

        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            estrela.style.left = value * 0.25 + 'px';
            lua.style.top = value * 1.05 + 'px';
            montanha_costas.style.top = value * 0.5 + 'px';
            montanha_frente.style.top = value * 0 + 'px';
            text.style.marginRight = value * 4 + 'px';
            text.style.marginTop = value * 1.5 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
            header.style.top = value * 0.5 + 'px';
        })