import homeLogo from '../../assets/home2.png'
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useNavigate } from 'react-router-dom';



function Home() {

  const navigate = useNavigate() 
  
    return (
        <>
        <div className="bg-green-800 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-6">
              <h2 className='text-5xl font-bold py-6'>Olá, seja bem-vinde!</h2>
              <p className='text-justify text-xl'>Este é o lugar perfeito para você expressar seus pensamentos, opiniões e compartilhar ideias e insights. Aqui, queremos criar uma atmosfera acolhedora e inclusiva, onde todos se sintam seguros para compartilhar suas experiências. Lembre-se de que não toleramos preconceito. Sinta-se à vontade para explorar e contribuir para a construção deste espaço positivo e enriquecedor. </p>
  
              <div className="flex justify-around gap-10 py-2">

              <ModalPostagem />
              <button className='rounded bg-green-900 text-white py-2 px-10 hover:font-bold' onClick={() => navigate("/postagens")} 
              >Ver postagens</button>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        
      </>
    );
}

export default Home;