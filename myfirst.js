var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(
    <html>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>HashGen</title>
        <style type="tex/css">
            body {
                background_color: rgb(150, 150, 150);
            }
    
            h1 {
                color: white;
                text_align: center;
            }
    
            p {
                font_family: verdana;
                font_size: 20px;
            }
    
            .button {
                background_color: rgb(252, 247, 0);
                border: none;
                color: rgb(0, 0, 0);
                padding: 15px 32px;
                text_align: center;
                text_decoration: none;
                display: inline_block;
                font_size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }
        </style>
    </head>
    
    <body>
        <script>
            function gera_hash() {
                var char_str = "";
                var qtde_char = document.getElementById("qtde_char").value;
                var hash_arr = [];
                var hash = "";
                // preparar char_str (com elementos de complexidade selecionados)
                if (document.getElementById("nums").checked) {
                    char_str += "1234567890";
                    hash_arr.push("1234567890".charAt(Math.floor(Math.random() * 10)));
                }
                if (document.getElementById("letra_min").checked) {
                    char_str += "abcdefghijklmnopqrstuvwxyz";
                    hash_arr.push("abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 26)));
                }
                if (document.getElementById("letra_mai").checked) {
                    char_str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    hash_arr.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random() * 26)));
                }
                for (var i = hash_arr.length; i < qtde_char; i++) {
                    hash_arr.push(char_str.charAt(Math.floor(Math.random() * char_str.length)));
                };
                for (var i = 0; i < qtde_char; i++) {
                    hash += hash_arr.splice(Math.floor(Math.random() * hash_arr.length), 1);
                };
                return hash;
            }
    
            function lista_hash() {
                var qtde_hash = document.getElementById("qtde_hash").value;
                var hash_list = "<ul>";
                //loop qtde_hash
                for (var i = 0; i < qtde_hash; i++) {
                    var hash = gera_hash();
                    hash_list += "<li>" + hash + "</li>";
                }
                hash_list += "</ul>";
                //imprimir lista
                document.getElementById("lista_hash").innerHTML = hash_list;
            }
            //funcao de debug
            function funcao_check() { console.log(document.getElementById("nums").value) }
        </script>
    
        <h1>Missão: "criar um gerador de senha" que possibilite as seguintes configurações:</h1>
        <form id="options">
            <p> 1. Definir quantidade de caracteres: <input type="number" id="qtde_char" value=6> </p>
            <p> 2. Setar nível de complexidade:</p>
            <p> 2.1 Números <input type="checkbox" id="nums" checked=true></p>
            <p> 2.2 Letras minúsculas <input type="checkbox" id="letra_min" checked=true></p>
            <p> 2.3 Letras maiúsculas <input type="checkbox" id="letra_mai"></p>
            <p> 3. Definir a quantidade de senhas que serão geradas: <input type="number" id="qtde_hash" value=3></p>
        </form>
        <p> <button id="gerar" class="button" onclick="lista_hash()">Gerar</button> </p>
        <p> A lista de códigos gerados vai aparecer aqui:<br> </p>
        <p id="lista_hash"> </p>
    </body>
    
    </html>
  );
}).listen(8080);
