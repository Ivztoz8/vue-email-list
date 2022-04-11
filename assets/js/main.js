var app = new Vue (
    {
        el:'#root',
        data: {
            arrayEmailsR: [],
        },
        created(){
            for (let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                        this.arrayEmailsR.push(response.data.response); 
                    })
                    console.log(this.arrayEmailsR);
                };
        }
    })