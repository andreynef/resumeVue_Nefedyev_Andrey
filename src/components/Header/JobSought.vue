
<template>
    <header class="header">
        <Photo/>
        <div class="headerInner">
            <section class="jobSoughtContainer">
                <h1 class="jobSoughtTitle">Соискаемая должность</h1>
                <p class="jobSoughtText">Front-end developer <br/> JavaScript developer</p>
                <p class="jobSoughtText">Нефедьев Андрей Сергеевич</p>
            </section>

        </div>
    </header>
</template>

<script>
    import Photo from "@/components/Header/Photo"
    export default {
        components: { Photo},
        data:()=>({
        }),
        methods: {
        },
        computed:{
        },
        beforeDestroy () {
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        /*align-items: center;*/
    }

    .headerInner {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin-left:2em;
    }
    .jobSoughtContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .jobSoughtTitle {
        text-align: center;
    }

    .jobSoughtText {
        font-size: 18px;
    }
    .contacts {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 10px;
    }

    /*.contactsWrapper {*/
    /*    display: flex;*/
    /*    animation: bounce 3s infinite alternate;*/
    /*}*/

    .contactsIcons {
        height: 32px;
        width: 32px;
        background-repeat: no-repeat;
        background-position: center;
        margin-right: 10px;
        transition: .2s;
        background-size: cover;
        opacity: .3;
    }

    .contactsIcons:hover {
        opacity: 1;
        transition: .2s;
    }

    .phoneNumber {
        background-image: url('/img/telephone-phone-svgrepo-com (1).svg');
        composes: contactsIcons;
    }

    .email {
        background-image: url('/img/at.svg');
        composes: contactsIcons;
        animation: rotate 5s infinite linear;
    }

    .vk {
        background-image: url('/img/vk.svg');
        composes: contactsIcons;
    }

    .wa {
        background-image: url('/img/whatsapp.svg');
        composes: contactsIcons;
    }

    .vbr {
        background-image: url('/img/viber-logo-svgrepo-com.svg');
        composes: contactsIcons;
    }

    .tg {
        background-image: url('/img/telegram.svg');
        composes: contactsIcons;
    }

    .sk {
        background-image: url('/img/skype.svg');
        composes: contactsIcons;
    }

    @keyframes rotate {
        from{
        }
        to {
            transform: rotate(360deg);
        }
    }
    @media (max-width: 750px) {
        .header {
            flex-direction: column-reverse;
        }
        .headerInner {
            margin-left:unset;
        }
    }


</style>

