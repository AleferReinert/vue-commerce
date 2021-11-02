<template>
  <main id="page-faq">
        <div class="container">
            <Breadcrumb current-page="Perguntas Frequentes" />
            
            <div class="page-title">
                <h1 class="title">Perguntas frequentes</h1>
            </div>
            
            <ul id="list-faq">
                <li v-for="(n, index) in 10" :key="index" :id="`question-${index}`">
                    <div @click="showAnswer(index)" class="question">
                        <h2>Lorem ipsum dolor sit amet consectetur adipiscing?</h2>
                        <font-awesome-icon icon="plus" class="icon-collapsed" />
                        <font-awesome-icon icon="minus" class="icon-show" />
                    </div>
                    <div class="answer">
                        <p>Etiam dignissim aliquam lacus at volutpat. Sed pretium non nibh et auctor. Vivamus vel dolor iaculis, viverra metus varius, facilisis libero.</p>
                        <p>Praesent elementum malesuada quam, ut viverra orci facilisis quis. Nunc viverra nisl ac ante aliquam gravida. Aenean elementum massa ac aliquam aliquet. Fusce tincidunt, justo sit amet dapibus faucibus, odio lectus fermentum justo, ac aliquam purus erat ut neque. Vestibulum eu malesuada dolor. Mauris eu luctus turpis. </p>
                    </div>
                </li>
            </ul>
		</div>
            
	</main>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'

export default {
    name: 'PerguntasFrequentes',
    components: {
        Breadcrumb
    },
    methods: {
        showAnswer(id){
            let question = document.getElementById(`question-${id}`)

            if(question.classList.contains('active')){
                question.classList.remove('active')
            } else {
                question.classList.add('active')
                
            }
        }
    }
}
</script>
<style lang="scss">
#page-faq {
    margin: $row-gap 0;

    #list-faq {

        li {
            margin-bottom: 10px;

            .icon-show {display: none;}
            .icon-collapsed {display: block;}

            &.active {
                .icon-show {display: block;}
                .icon-collapsed {display: none;}

                .answer {
                    display: block;
                }
            }
        }

        .question {
            background: rgba(0,0,0,0.035);
            padding: 15px;
            display: grid;
            grid-template-columns: auto max-content;
            grid-column-gap: 15px;
            align-items: center;
            transition: all 0.15s linear;
            cursor: pointer;

            [class*="icon-"] {
                float: right;
            }

            &:hover {
                background: rgba(0,0,0,0.085);
            }
        }

        h2 {
            font-weight: 500;
            text-transform: $capitalization;
            font-size: $font-12px; 
        }

        .answer {
            padding: 0 15px;
            font-size: $font-13px;
            line-height: 20px;
            display: none;
        }
    }
}
</style>