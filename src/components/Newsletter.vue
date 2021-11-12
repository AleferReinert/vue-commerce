<template>
    <div class="bar-newsletter">
        <div class="container">
            <form method="post" action="">
                <label for="">Cadastre-se para receber ofertas e descontos exclusivos!</label>
                <input type="email" placeholder="Digite seu melhor e-mail..." class="input">
                <button type="submit" class="btn btn-success">Cadastrar</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Newsletter'
}
</script>
<style lang="scss">
.bar-newsletter {
    background: rgba(63, 49, 49, 0.075);
    padding: 15px 0;
    margin-bottom: $row-gap;
    text-align: center;

    form {
        display: grid;
    }

    .input {
        margin: 15px 0 10px;
    }
}

@media all and (min-width: $breakpoint-medium) {

    .bar-newsletter {

        form {
            grid-template-columns: auto min-content;
        }

        label {
            grid-column: 1 / 3;
            margin: 5px 0 15px;
        }

        .input {
            margin: 0;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        .btn {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
    }
}

@media all and (min-width: $breakpoint-large) {

    .bar-newsletter {
        padding: 25px 0;

        form {
            grid-template-columns: max-content auto min-content;
        }

        label {
            grid-column: auto;
            margin: 0 20px 0 0;
            line-height: 40px;
        }
    }
}
</style>