
import { createPortal } from "react-dom"
import { Suspense, lazy } from "react"

const MemeGenerator = lazy(() => import('./MemeGenerator'))

function App(){

    function greeting(){
        return new Promise(resolve =>{
            setTimeout(() => {
                resolve('Hey, nice to meet you')
            }, 3000)
        })
    }

    return createPortal(
        <div>
            <Suspense fallback={<div>Wait a moment........</div>}>
                <MemeGenerator />
                {greeting().then(res => <p>{res}</p>)}
            </Suspense>
        </div>, 
        document.body
    )
}

export default App