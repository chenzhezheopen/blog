<!--  -->
<template>
    <el-dialog
        v-model="dialogVisible"
        title="登陆"
        width="30%"
        :before-close="()=>dialogVisible=false"
        :close-on-click-modal = 'false'
    >
        <el-form>
            <el-form-item label="账号：">
                <el-input v-model="form.account" />
            </el-form-item>
            <el-form-item label="密码：">
                <el-input v-model="form.password" />
            </el-form-item>
        </el-form>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="login">Confirm</el-button>
        </span>
        </template>
    </el-dialog>
</template>

<script lang='ts'>
import { useUserStore } from '@/pinia/user'
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

        const login = async ()=>{
            let res = await userApi.login(state.form)
            console.log(res);
            if(res.code===200){
                state.dialogVisible = false
                userStore.queryToken(res.data)
            }else{
                ElMessage.error(res.msg || res.message || '登陆失败')
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
            handleClose
        }
    }
}
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */
.common-login{

}
</style>