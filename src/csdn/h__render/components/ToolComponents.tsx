/*
 * @Author: 陈哲
 * @Date: 2022-04-26 14:49:56
 * @LastEditors: 陈哲
 * @LastEditTime: 2022-04-26 17:18:00
 * @Description: components group
 */
import { VNode,ref,toRefs, toRef } from 'vue'

// export const Btn = {
//     setup(){
//         const count = ref(0)
//         return {
//             count
//         }
//     },
//     render(context) {
//         console.log(context);
//         const {count} = toRefs(context)
//         return <button onClick={()=>count.value++}>{count.value}</button>
//     }
// }
export class Btn{
    text:string=''
    props:any= {
        ceshi: {
            type: String,
            default:()=>'55555555'
        }
    }
    setup(props:any){
        const count = ref(0)
        const { ceshi} = toRefs(props)
        console.log(ceshi.value);
        return {
            count
        }
    }
    render(context:any) {
        console.log(context);
        const {count} = toRefs(context)
        return <button onClick={()=>count.value++}>{count.value}</button>
    }
}

export class Input{
    setup(props:any){
    }
    render(context:any) {
        return <input type="text" />
    }
}

export const btn = new Btn()
export const input = new Input()