var app = new Vue (
    {
        el:'#root',
        data: {
            emailRandom: null,
        },
        created(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                
                    this.emailRandom = response.data.response;
                    console.log(res.data.response); 

            });
        },
    }
)