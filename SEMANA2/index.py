# importa do Flask as ferramentas que vamos usar:
# Flask -> classe principal para criar a aplicação web
# render_template -> função para renderizar arquivos HTML
# request -> permite acessar dados enviados pelo cliente (formulários, query params etc.)
from flask import Flask, render_template, request

# cria a aplicação Flask
# __name__ diz ao Flask onde está o arquivo principal da aplicação
app = Flask(__name__)

# decorator que define uma rota
# quando alguém acessar "/" (a página inicial do site),
# a função logo abaixo será executada
@app.route("/")
def index():
    
    # render_template envia um arquivo HTML como resposta ao navegador
    # nesse caso ele tenta renderizar o arquivo index.html
    # OBS: normalmente o Flask espera que os templates estejam dentro
    # de uma pasta chamada "templates"
    return render_template("index.html")
# verifica se este arquivo está sendo executado diretamente
# e não importado por outro script
if __name__ == "__main__":
    
    # inicia o servidor web do Flask
    # debug=True ativa modo de desenvolvimento:
    # - recarrega o servidor automaticamente quando o código muda
    # - mostra erros detalhados no navegador
    app.run(debug=True)