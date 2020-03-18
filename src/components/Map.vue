<template>
    <div class="map-wrapper">
        <div class="info-box">
            <div class="info-box__location" id="location">
                <div class="info-box__location--info-card">
                    <div class="info-box__location--closer" id="location-closer">×</div>
                    <div class="info-box__location--detail">
                        <h3 id="state"></h3>
                        <h4 id="capital"></h4>
                        <p id="description"></p>
                    </div>
                </div>
            </div>
        </div>
        <div id="map" class="map">
            <States/>
        </div>
    </div>
</template>

<script>
    import States from './States.vue'
    export default {
        components: {
            States
        },
        mounted() {
            const allStates = document.querySelectorAll('.state')
            const infoBox = document.getElementById('location')
            const closer = document.getElementById('location-closer')
            const elmState = document.getElementById('state')
            const elmCapital = document.getElementById('capital')
            const elmDesc = document.getElementById('description')

            function showHideInfo(ar) {
                let activeClass = 'info-box__location--active'
                if (ar === 'add') {
                    infoBox.classList.add(activeClass)
                }
                if (ar === 'remove') {
                    infoBox.classList.remove(activeClass)
                }
            }
            function cleanUp() {
                let activeState = document.querySelectorAll('.state-active')
                activeState.forEach(function (act) {
                    act.classList.remove('state-active')
                })
                infoBox.classList.remove('info-box__location--active')
            }

            async function getJSON(abbr) {
                await fetch('./state-data.json')
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    elmState.innerHTML = data[abbr]['name']
                    elmCapital.innerHTML = data[abbr]['capital']
                    elmDesc.innerHTML = data[abbr]['description']
                    //console.log(data[abbr])
                })
                .catch((err) => {
                    console.log("Error Reading data " + err)
                })
            }

            function clickState() {
                let theState = this.getAttribute('id')
                getJSON(theState)
                cleanUp()
                showHideInfo('add')
                this.classList.add('state-active')
            }

            // click on a state
            allStates.forEach(state => {
                state.addEventListener('click', clickState)
            })

            // manually close the info-box
            closer.addEventListener('click', function () {
                showHideInfo('remove')
                cleanUp()
            })

        }
    }

</script>

<style scoped lang="scss">
    .map-wrapper {
        max-height: 100vh;
        padding: 1rem;
        position: relative;
        max-width: 100vw;
    }
    .info-box {
        height: 0;
        left: 50%;
        list-style-type: none;
        margin: 0 auto;
        padding: 0;
        position: absolute;
        text-align: center;
        top: 50%;
        transform: translateX(-50%);
        transition: opacity .25s ease-in-out;
        z-index: 1;
        &__location {
            height: 0;
            opacity: 0.0;
            overflow: hidden;
            &--active {
                height: auto;
                opacity: 1.0;
            }
            &--info-card {
                background-color: silver;
                padding: 1em;
                margin: 0 auto;
                text-align: left;
            }
            &--closer {
                cursor: pointer;
                display: block;
                height: 40px;
                text-align: right;
                width: 40px;
            }
            &--detail h4 {
                margin: 0;
            }
        }
    }
</style>
