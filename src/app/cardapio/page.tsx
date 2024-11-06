import CardCategoria from '@/components/card-categoria';
import css from '@/css/telaInicial.module.css'
import { Search } from 'lucide-react';
import ListaProdutos from '@/components/list-produtos';
import Carrinho from '@/components/carrinho/carrinho';
export default async function ClientPage() {
    const fetchData = await fetch('http://localhost:3000/api/users', {method:"GET"})
    console.log(fetchData)
    return (
        <div style={{ padding: ' 0 20px', margin: 0, display: 'flex', justifyContent: 'center'}}>
          <main className={css.container}>
            <section className={css.conteudo_principal}>
              <header className={css.cabecalho}>
                <h1><strong>Cardapio</strong> facil</h1>
                <div className={css.formulario}>
                  <input
                    placeholder='pesquise aqui'
                  />
                  <Search />
                </div>
              </header>
              {/* Scroll categoria */}
              <div className={css.container_categoria}>
                <h3>Categorias</h3>
                <div className={css.cards}>
                  <CardCategoria />
                  <CardCategoria />
                  <CardCategoria />
                  <CardCategoria />
                </div>
              </div>
              {/* Area de produtos */}
              <div className={css.container_produtos}>
                <h3>Principais opções</h3>
                <div className={css.container_cards_produtos}>
                  <ListaProdutos />
                </div>
              </div>
            </section>
            <Carrinho />
          </main>
        </div>
    );
}
