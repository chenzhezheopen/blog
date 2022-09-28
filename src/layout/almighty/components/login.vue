<!--
 * @Author: 陈哲
 * @Date: 2022-09-19
 * @LastEditors: cz
 * @Description: 
-->
<template>
    <div class="almighty-login">
        <el-form>
            <el-form-item label="账号：">
                <el-input v-model="form.account" />
            </el-form-item>
            <el-form-item label="密码：">
                <el-input v-model="form.password" />
            </el-form-item>
        </el-form>
        <span class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="login">Confirm</el-button>
        </span>
    </div>
</template>

<script lang='ts'>
import { useUserStore } from '@/pinia/user'
import { useAlmightyStore } from '@/pinia/almighty'
import { reactive, toRefs } from 'vue';
import {ElMessage} from 'element-plus'
import userApi from '@/api/modules/user'
export default {
    setup(){
        const state = reactive({
            dialogVisible:false,
            form:{
                account:'',
                password:''
            }
        })
        const userStore = useUserStore()
        const {open} = useAlmightyStore()

        const login = async ()=>{
            let res = await userApi.login(state.form)
            console.log(res);
            if(res.code===200){
                state.dialogVisible = false
                userStore.queryToken(res.data)
                await queryUserInfo()
                ElMessage({
                    message: '登陆成功',
                    type: 'success',
                })
            }else{
                ElMessage({
                    message:res.msg || res.message || '登陆失败',
                    type:'warning'
                })
            }
            
        }

        const queryUserInfo = async () =>{
            let info = await userApi.queryUserInfo()
            if(info.code === 200){
                userStore.assignState({
                    info:info.data
                })
                userStore.queryWish()
                open('Catalog')
            }
        }

        const handleClose = () => {}

        const init = () => {
            if(!userStore.token){
                state.dialogVisible = true
            }
        }

        init()

        return {
            ...toRefs(state),
            login,
            handleClose,
            queryUserInfo
        }
    }
}
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */

</style>