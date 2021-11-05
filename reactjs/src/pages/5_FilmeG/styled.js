import styled from 'styled-components';

import CapaMaior from '../../assets/img/capa-maior.jpeg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(0, 0, 0);
    color:white;
    font-family: Montserrat;
    position: static;

    .back {
        background-image: url(${CapaMaior});
        background-size: 100% 95%;
        background-repeat: no-repeat;
        background-position: static static;
    }

    .filme{
        font-family: Montserrat;
        height: 600px;  
        color: white;

        margin-left: 25%;
        position: relative;

        display: flex;
        flex-direction: column;

        justify-content: flex-end;
    }

    .plataformas {
        margin-top: 23px;
        width: 300px;
        font-weight: bold;
    }

    .dif-f2 {
        font-weight: 500;
        margin-bottom: 8px;
    }


    .Nome_do_filme{
        display: flex;
        flex-direction: column;
        font-size: 30px; 
        margin-left: 3.5%;
    }

    .diretor{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 400px;
        margin-bottom: 3.5em;
    }


    .imagen_do_filme img{
        display: flex;
        flex-direction: row !important;
        height: 450px;
        position: relative;
        margin-top: -150px;

        
    }

    @media (max-width: 800px) {
 

       .back { background-size: 100% 35%; }
       .filme { margin: 0px; height: 100px;  }
       .imagen_do_filme img { width: 100px; height: 155px; }
    }

    .faixa-2{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0em 4em;
        height: 550px;
    }

    .box-2{
        display: flex;
        flex-direction: column !important;
    }

    .informacao_do_filme{
        font-family: Montserrat;
        font-size: 15px;
        width: 450px;
        margin: 10px 0px 15px;
    }

    

    .sinopse{
        font-family: Montserrat;
        background-color:#FFB800;
        margin-left: 40px;
        width: 550px;
        color: black;
        padding: 10px;

    }

    .sinopse_filme {
        font-weight: bold;
        font-size: 14px;
    }

    .nota{
        font-family: Montserrat ;
        text-align: left;
        margin-top: 2em;
        font-size: 24px;
        font-weight: bold;

    }



    .faixa-3{
        display: flex;
        flex-direction: row;
    }

    .box{
        display: flex;
        flex-direction: column !important;
        width: 350px;
    }

    .linha{
        display: flex;
        flex-direction: row;
    }

    .principais_atores{
        display: flex;
        flex-direction: row;
        background-color: #575757;
        padding: 30px;
        justify-content: space-between;
        text-align: center;
    
    }

    .sep { 
        font-size: 14px;
        font-weight: bold;
        width: 70px;
    }

    .box-3{
        background-color: #3B3B3B;
        margin-top: 50px;

    }

    .principais_atores img{
        align-items: center;
        width: 70px;
        height: 100px;
    }

    .estrela img{
        width: 145px;
        height: 80px;
        margin-right: 10px;
    }

    .parte-dif {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 3em;
    }

    .disponivel{
        font-family: Montserrat;
        font-size: 20px;
        margin-left: 5px;
    }

    .critica {
        display: flex;
        flex-direction: row;
        margin: 2em 4em;
        justify-content: space-between;
    }

    .titulo {
        font-weight: bolder;
        font-size: 20px;
    }

    .p1 { 
        display: flex;
        flex-direction: column;
        width: 650px;
    }


    .comentario-geral {
        margin-top: 15px;
    }

    .usuario {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .nome {
        font-size: 18px;
        font-weight: bold;
        margin-left: 15px;
    }

    .comentario-txt {
        font-size: 15px;
        margin-left: 50px;
        text-align: justify;
        text-justify: inter-word;
        line-height: 18px;
    }


    .pt3-b2 {
        display: flex;
        flex-direction: column;
        margin-left: 50px;
        margin-top: 20px;
    }

    .verm-c {
        text-align: end;
        margin-top: 30px;
    }

    .verm-c button {
        color: #fff;
        background-color: transparent;
        border: 3px solid #FFB800;
        border-radius: 15px;
        width: auto;
        height: 3.4em;
        font-weight: bold;
        padding: 2px 15px;
        font-family: Montserrat;
        font-size: 12px;
        cursor: pointer;
    }

    .dif {
        display: flex;
        flex-direction: row;
    }

    .tudo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 14px;
    }

    .sobre {
        display: flex;
        flex-direction: row;
        text-align: center;
    }

    .tit-s {
        font-weight: bold;
        margin-right: 10px; 
    }

    .data {
        font-weight: bold;
        margin-bottom: -15px;
    }

    .like {
        margin-left: 15px;
    }

    .like button {
        background-color: transparent;
        border: transparent;
        cursor: pointer;
    }

    .like img{
        height: 30px;
        width: 40px;
    }









    .p2 { 
        display: flex;
        flex-direction: column;
    }

    .bloco {
        height: auto;
        width: 350px;
        background-color: #3B3B3B;
        text-align: center;
        padding: 20px 0em;
        font-size: 13px;
        font-weight: 600;
    }

    .parte1-p2 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0px 30px;
    }

    .txt-p2 {
        font-size: 10px;
    }

    

    .img-p2-d img {
        height: 50px;
        width: 60px;
    }

    .img-p2-di img {
        height: 50px;
        width: 36px;
    }


    .barra-p2 img{
        align-items: center;
        text-align: center;
        width: 350px;
    }
    .barra-p2 {
        align-items: center;
        text-align: center;
        width: 350px;
    }

    .parte2-p2 {
        display: flex;
        flex-direction: column;
        padding: 25px 0px 0px;
    }


    .parte3-p2 {
        padding: 25px 0px;
    }

    .parte4-p2 {
        padding: 25px 0px 15px;
    }


    @media (max-width: 800px) {
       .back { background-size: 100% 35%; }
       .filme { margin: 0px; height: 100px;  }
       .imagen_do_filme img { width: 100px; height: 155px; }
    }


    //.filme{
    //    font-family: Montserrat;
    //    height: 600px;  
    //    color: white;

    //    margin-left: 25%;
     //   position: relative;

    //    display: flex;
    //    flex-direction: column;

    //    justify-content: flex-end;
    //}


`;


const ContainerC = styled.div`
    .back {
        background-image: url(${CapaMaior});
        background-size: 100% 95%;
        background-repeat: no-repeat;
        background-position: absolute;
    }
    .back {
        opacity: 0.5;
    }

    .cabecalho  {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
    }

    .fundo img {
        width: 100%;
        height: 100vh;
        position: absolute;  
        opacity: 0.5;
        top: 0px;
    }

    .iPzoRb {
        padding-top: 20px;
        margin-top: -.3em;
    }

    .filme{ 
        display: flex;
        flex-direction: column;
        font-family: Montserrat;
        width: 420px;
        color: white;
        position: relative;
        bottom: -1em;
    }

    .plataformas {
        width: 300px;
        font-weight: bold;
    }

    .dif-f2 {
        font-weight: 500;
        margin-bottom: 8px;
    }


    .Nome_do_filme{
        display: flex;
        flex-direction: column;
        font-size: 30px; 
        margin-bottom: .3em;
    }

    .diretor{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: center;
        width: 420px;
        margin-bottom: 3.5em;
    }


    .imagen_do_filme img{
        height: 320px;
        position: relative;
    }

    @media (max-width: 800px) {
 

       .back { background-size: 100% 35%; }
       .filme { margin: 0px; height: 100px;  }
       .imagen_do_filme img { width: 100px; height: 155px; }
    }

    .faixa-2{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: .5em 4em 1em;
        height: auto;
    }

    .box-2{
        display: flex;
        flex-direction: column !important;
    }

    .informacao_do_filme{
        font-family: Montserrat;
        font-size: 15px;
        width: 450px;
        margin: 2em 0em 1em;
        text-align: justify;
    }

    

    .sinopse{
        font-family: Montserrat;
        background-color:#FFB800;
        width: 430px;
        color: black;
        padding: 10px;
        text-align: justify;
        margin-left: 0em;
    }

    .sinopse_filme {
        font-weight: bold;
        font-size: 15px;
    }

    .nota{
        font-family: Montserrat ;
        text-align: left;
        margin-top: 2em;
        font-size: 16px;
        font-weight: bold;

    }



    .faixa-3{
        display: flex;
        flex-direction: row;
    }

    .box{
        display: flex;
        flex-direction: column !important;
        width: 350px;
    }

    .linha{
        display: flex;
        flex-direction: row;
    }

    .principais_atores{
        display: flex;
        flex-direction: row;
        background-color: #575757;
        padding: 30px;
        justify-content: space-between;
        text-align: center;
    
    }

    .sep { 
        font-size: 14px;
        font-weight: bold;
        width: 70px;
    }

    .box-3{
        background-color: #3B3B3B;
        margin-top: 50px;

    }

    .principais_atores img{
        align-items: center;
        width: 70px;
        height: 100px;
    }

    .estrela img{
        width: 165px;
        height: 80px;
        margin-right: 10px;
        margin-top: -1em;
    }

    .nota-final {
        margin-top: -1em;
        font-size: 20px;
    }

    .parte-dif {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 0em;
    }

    .disponivel{
        font-family: Montserrat;
        font-size: 20px;
        margin-left: 5px;
    }

    h5{
        margin-top: -10px;
        font-size: 30px;
        width: 500px;
    }

    @media (max-width: 800px) {
        .back { background-size: 100% 35%; }
        .filme { margin: 0px; height: 100px;  }
        .imagen_do_filme img { width: 100px; height: 155px; }
    }
`;

export { Container, ContainerC }