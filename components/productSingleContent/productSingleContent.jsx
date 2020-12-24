import React, {useState} from 'react'
import style from './productSingleContent.module.scss'
import {Container, Grid, Typography} from "@material-ui/core"
const colorsData = ['Black', 'Grey', 'Red', 'Blue']
function ProductSingleContent() {
    const [activeColorIndex, setActiveColorIndex] = useState(0)
    return (
        <div className={style.wrapper}>
        <Container>
        <div className={style.inner}>
            <div className={style.type}>Free Engraving</div>
            <div className={style.name}>Buy AirPods Max</div>
            <div className={style.desc}>Requires AirPods Max with the latest version of software, and iPhone and iPod touch models with the latest version of iOS; iPad models with the latest version of iPadOS; Apple Watch models with the latest version of watchOS;</div>
            <div className={style.colors_cont}>
                <div className={style.colors_title}>Colors</div>
                <Grid container xs={12} spacing={2}>
                    {colorsData.map((item, index) => (  <Grid item xs={6} key={index} onClick={() => setActiveColorIndex(index)}>
                        <div className={`${style.color_cont} ${activeColorIndex === index ? style.active : ""}`}>
                            <div className={style.inner}>
                            <div className={`${style.color_ball} ${style[item.toLowerCase()]}`}></div>
                            <div className={style.color_name}>{item}</div>
                            </div>
                        </div>
                    </Grid>))}
                   
                </Grid>
            </div>
            <div className={style.price}>$549.00</div>
            <div className={style.overview}>
            <div className={style.main_title}>
                Overview
                </div>
                <div className={style.content}>
                <div className={style.title}>High-performance workout earphones</div>
Powerbeats Pro will revolutionize the way you work out. Built for elite athletes, these totally wireless earphones have no wires to hold you back. The adjustable, secure-fit earhooks are customizable with multiple eartip options for extended comfort and are made to stay in place, no matter how hard you go. These lightweight earphones are built for performance with a reinforced design for sweat and water resistance, so you can take your workouts to the next level. With up to 9 hours of listening time in each earbud and powerful, balanced sound, you’ll always have your music to motivate you.

<div className={style.title}>Sound like a pro</div>

We listened to real athletes with the aim of designing wireless earphones that matched their toughest workouts—and we heard over and over that sound was their top priority. Powerbeats Pro boast powerful, balanced audio thanks to an entirely redesigned acoustic package that delivers pure sound reproduction, enhanced clarity, and improved dynamic range. Because great sound starts with proper fit, these earphones were also crafted with a focus on ergonomic comfort to give you the best listening experience possible.

Play both sides or just one at a time
Left, right, or both, enjoy ultimate control over your audio. Each earbud has full volume and track controls so you don’t need your iPhone or other device to adjust your music. Auto Play/Pause sensors know when the earbuds are in your ear, jumpstarting your workouts as soon as you’re ready to go. And with voice-assistant capability on a variety of compatible devices, you can stay in the zone.

<div className={style.title}>Power. Play.</div>
Long hours of training? Marathons? Bring it. Each earbud has up to 9 hours of listening time so you can keep your music going. With the charging case, you’ll get more than 24 hours of combined playback. If you’re in need of extra juice, 5-minute Fast Fuel charging gives 1.5 hours of playback when the battery is low.1 To further conserve battery life, Auto On/Off sensors detect when earbuds are idle and automatically enter sleep mode. When you’re ready to use them again, simply put them back in your ears and you’ll be off and running. Now, you can spend less time worrying about charging and more time charging forward.

<div className={style.title}>Just ask Siri.</div>
Talking to your favorite personal assistant is easier than ever. Simply say “Hey Siri” for voice-activated assistance without having to reach for your iPhone.2 Powered by the new Apple H1 headphone chip, Powerbeats Pro deliver a faster and more stable wireless connection to your devices.3

                </div>
            </div>
            </div>
        </Container>
    </div>
    )
}

export default ProductSingleContent
