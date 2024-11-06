import { useCarrinho } from '@/context/CarrinhoContextType'
import css from '@/css/telaInicial.module.css'
import { CarfapioOpcoes } from '@/types/CardapioOpcoes'
import { Star } from 'lucide-react'

interface props{produto:CarfapioOpcoes}
export default function CardProduto({produto}:props) {
    const { categoria, estrelas, id, imgUrl, nome } = produto
    const { addProduto } = useCarrinho()

    return (
        <div className={css.card_produto} onClick={addProduto}>
            <div className={css.container_image_produto}>
                <img src={imgUrl} className={css.image_produto} />
            </div>
            <div className={css.info_produto}>
                <span>Pizza classica</span>
                <div className={css.detalhes_produto}>
                    <Star className='text-zinc-400' />
                    <p className='text-zinc-400'>4.5</p>
                    <p className='text-zinc-400'>Nome da categoria</p>
                </div>
            </div>
        </div>
    )
}
