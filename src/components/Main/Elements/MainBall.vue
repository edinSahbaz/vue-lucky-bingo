<template>
    <div id="bingoBall">
        <p>{{num}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            num: {
                type: Number
            }
        }
    };
</script>

<style scoped>
    #bingoBall {
        background: -webkit-linear-gradient(to right, #ee0979, #ff6a00); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #ee0979, #ff6a00);
        border: 3px solid #f8f0ee;
        border-radius: 50%;
        width: 20em;
        height: 20em;
        cursor: pointer;
        transition: 0.4s;
    }

    #bingoBall:hover {
        border-color: #fff7f5;
        transform: scale(1.03);
        filter: brightness(105%);
    }

    p {
        margin-top: 0.13em;
        margin-right: 0.07em;
        font-size: 12em;
        text-align: center;
    }
</style>