import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cabecalho from '../../../components/comum/cabecalho'
import Rodape from '../../../components/comum/rodapê'
import ProxPag from '../../../components/comum/botao-prox-pag'
import TituloC from '../../../components/comum/titulo'
import Removerb from '../../../assets/img/Xremover.png';

import Modal from '../../../components/comum/modal'

import LinhaSep from '../../../assets/img/linhasep-listass.png';
import { Link } from 'react-router-dom';

import { Container, BlocoC } from './styled.js';

import {Loader} from '../../../components/comum/loader'

import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom';

import Api from '../../../1_service/api';
const api = new Api();

//import axios from 'axios';


export default function FilmesGostos(props) {
    const [ filme, setFilme ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ exibirModal, setExibirModal ] = useState({show: false})
    const [ ordenacao, setOrdanacao ] = useState('A - Z')
    const navigation = useHistory();

    function Comprar() {
        let ler = Cookies.get('/filmes');

        ler = ler !== undefined
            ? JSON.parse(ler)
            : [];

        if(ler.some(item => item.id === filme.id) === false) 
            ler.push({...filme, qtd: 1 });
        

        Cookies.set('filmes', JSON.stringify(ler))

        navigation.push('/detfilmes');
    }


    async function Listar() {
        setLoading(true);
        
        let r = await api.ListarF(ordenacao);
        setFilme(r);

        setLoading(false);
    }

    const Remove = async (id) => {
        const r = await api.RemoverF(id);
        toast.dark('🗑️ Filme Removido!');
        
        Listar();
    }

    useEffect(() => {
        Listar();
      }, [ordenacao]);


    return(
        <Container>
            <ToastContainer />
            <Cabecalho/>

            <TituloC nome="Meus Filmes"/>

            <div className="tipos">
                <div className="p1">
                    <div className="box1"><Link to="/meusfilmes">
                        <div className="txt">Já assistidos</div>
                        <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                    </Link></div>
                    
                    <div className="box-c"><Link to="/meusfilmes/comfA">
                        <div className="txt-d">Assistir mais tarde</div>
                        <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                    </Link></div>

                    <div className="box"><Link to="/meusfilmes/comfP">
                        <div className="txt-d">Por gosto</div>
                        <div className="img-tipos"><img src={LinhaSep} alt="" /></div>
                    </Link></div>
                </div>

                <div className="p2">
                    <div className="ordenar">
                        <select onClick={e => setOrdanacao(e.target.value)}>
                            <option value="A - Z">A - Z</option>
                            <option value="Z - A">Z - A</option>
                            <option value="Avaliação">Avaliação</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="filmes">
                {loading && <Loader />}

                { !loading &&
                    filme.map(item => 
                        <BlocoC>
                        <Modal options={exibirModal}>
                            <div className="geral-m">
                                <div className="p1-m">
                                    <div className="img-m"><img src={ item.img_menor } alt="" /></div>
                                    <div className="nome-m" title={ item.nome != null && item.nome > 25? item.nome : null }>{ item.nome != null && item.nome >= 25 ? item.nome.substr(0, 25) + '..' : item.nome }</div>
                                </div>
                                <div className="sep"></div>
                                <div className="p2">
                                    <div className="sub-m"><b>Diretor:</b> {item.diretor}</div>
                                    <div className="sub-m"><b>Descrição:</b> { item.descricao != null && item.descricao >= 105 ? item.descricao.substr(0, 105) + '...' : item.descricao }</div>
                                    <div className="sub2-m"><b>Plataformas:</b> {item.plataforma}</div>
                                    <div className="botao"><button onClick={Comprar}>Ver mais</button></div>
                                </div>
                            </div>
                        </Modal>
                       
                        <div className="filme">
                            <div>
                               <div className="remover" onClick={Remove}> <img src={Removerb} alt=""/> </div>
                               <div className="img" onClick={() => setExibirModal({show: true})}><img src={item.img_menor} alt="" /></div> 
                               <div className="nome" onClick={() => setExibirModal({show: true})} title={ item.nome != null && item.nome > 25? item.nome : null }>{ item.nome != null && item.nome >= 25 ? item.nome.substr(0, 25) + '...' : item.nome }</div>
                            </div>
                        </div>
                      </BlocoC>
                    )}
            </div>

            <ProxPag />


            <Rodape/>
        </Container>
    )
}


//'http://localhost:3030/filmesjassistidos?ordenacao=' + ordenacao
// const resp = await axios.get('http://localhost:3030/filmesjassistidos?ordenacao=' + ordenacao) setOrdanacao([...resp.data])