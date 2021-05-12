    import React, { useState } from 'react'
    import styled from 'styled-components'

    const arr = [
        {
            img:"ic-1.png",
            img_hv:"ic-hv-1.png",
            name:"Development",
            title:"Trust your intuition",
            content:"Lorem ipsum dolor sit amet, consec tet uer adipis cing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et",
            class_it:"",
            a:"active"
        },{
            img:"ic-1.png",
            img_hv:"ic-hv-1.png",
            name:"Development",
            title:"Trust your intuition",
            content:"Lorem ipsum dolor sit amet, consec tet uer adipis cing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et",
            class_it:"it2"
        },{
            img:"ic-3.png",
            img_hv:"ic-hv-3.png",
            name:"Selling & Buying",
            title:"Fast Growing",
            content:"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet etiam ",
            class_it:"it3"
        },{
            img:"ic-4.png",
            img_hv:"ic-hv-4.png",
            name:"Development",
            title:"Innovative Method",
            content:"Lorem ipsum dolor sit amet, consec tet uer adipis cing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et ",
            class_it:"it4"
        },{
            img:"ic-5.png",
            img_hv:"ic-hv-5.png",
            name:"Selling & Buying",
            title:"High Security",
            content:"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet etiam ",
            class_it:"it5"
        },{
            img:"ic-6.png",
            img_hv:"ic-hv-6.png",
            name:"Development",
            title:"Encrypted Payment",
            content:"Lorem ipsum dolor sit amet, consec tet uer adipis cing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et ",
            class_it:"it6"
        },{
            img:"ic-7.png",
            img_hv:"ic-hv-7.png",
            name:"Selling & Buying",
            title:"National Security",
            content:"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet etiam",
            class_it:"it7"
        },{
            img:"ic-8.png",
            img_hv:"ic-hv-8.png",
            name:"Development",
            title:"Mobile Payments",
            content:"Lorem ipsum dolor sit amet, consec tet uer adipis cing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et",
            class_it:"it8"
        },
    ]

    const Token=() => {

        const[item,Setitem] = useState(arr);
        const[at,Set_at] = useState(false);
        const[demo,Setdemo] = useState(0);

        const add_active = (idx) => {
            Setdemo(idx);
        }
        console.log(item);

        return(
            <Box_tk>
                <Content_tk className="container">
                    <Box_left_tk>
                        <Circle>

                            {item.map((it,idx)=>(
                                 <div key={idx} className={ demo==idx ?"item active":"item "} onMouseOver={()=>add_active(idx)}>
                                 <div className={`item-circle ${it.class_it}`}>
                                     <span className="img"><img src={`images/${it.img}`} alt="" /></span>
                                     <span className="img-hv"><img src={`images/${it.img_hv}`} alt="" /></span>
                                 </div>
 
                                 <div className="text-circle">
                                     <span>{it.name}</span>
                                     <h4>{it.title}</h4>
                                     <p>{it.content}</p>
                                 </div>
                             </div>
                            ))}
                        </Circle>
                    </Box_left_tk>
                    <Box_right_tk>
                        <div className="text_right">
                            <h1>Token Distribution</h1>
                            <h5>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim</h5>
                            <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus <span>varius laoreet</span>.
                                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullam corper ultricies nisi. Nam eget dui.
                                    Etiam rhoncus. <span>Maecenas tem pus</span>, tellus eget condimentum rhoncus, sem quam semper fabul</p>
                            <div className="btn">
                                <a href="">PURCHASE</a>
                            </div>
                        </div>

                    </Box_right_tk>
                </Content_tk>
            </Box_tk>
        );
    }

    const Box_tk = styled.section`
        width:100%;
        padding:7.5rem 0;
    `

    const Content_tk = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
    `
    const Box_left_tk = styled.div`
        width:100%;
        height: 500px;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items: center;
    `

    const Circle = styled.div`
        width:500px;
        height:500px;
        border: 2px dashed #828282;
        border-radius:50%;
        position:relative;

        .item:hover{
            .text-circle{
                display:block;
            }
        } 

        .item.active {
            
            .item-circle{
                background:#aceb2f!important;
                .img{
                    display:none;
                 }
                .img-hv{
                    display:block;
                } 
            }

            .text-circle{
                display:block;
                animation: run_text 2s ;
            }

           /*  @keyframes run_text {
                from {
                    opacity:0;
                }
                to{
                    opacity:1;
                }
               
              } */
        }

        .item-circle{
            width:120px;
            height:120px;
            border-radius:50%;
            background:#333;
            line-height:120px;
            text-align: center;
            /* transform: translate(155%,-55%); */
            animation: mymove 2s ;
            display: inline-block;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);

            .img-hv{
                display: none;
            }
            

            :hover {
                background:#aceb2f!important;
                 .img{
                    display:none;
                 }
                .img-hv{
                    display:block;
                }

            }
            
        }

        @keyframes mymove {
            from {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
           
          }

         .item-circle.it2 {
            top: 14.6%;
            left: 85.4%;
        }

        .item-circle.it3 {
            top: 50%;
            left: 100%;
        }

        .item-circle.it4 {
            top: 85.4%;
            left: 85.4%;
        }

        .item-circle.it5 {
            top: 100%;
            left: 50%;
        }

        .item-circle.it6 {
            top: 85.4%;
            left: 14.6%;
        }

        .item-circle.it7 {
            top: 50%;
            left: 0;
        }

        .item-circle.it8 {
            top: 14.6%;
            left: 14.6%;
        } 



        .text-circle{
            width: 300px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            text-align: center;
            display:none;
        }
    `

    const Box_right_tk = styled.div`
        width:100%;

        .text_right{
            width:100%;
            text-align:left;    
            padding-bottom:28px;
            padding-left:20%;
            h1{
                color:white;
                font-weight:600;
                font-family: 'Montserrat', sans-serif;
            }

            h5{
                color: #ffffff;
                font-size: 18px;
                font-style: italic;
                font-weight: 400;
                line-height: 28px;
                margin: 11px 0 0 0;
                
            }

            p{
                display: block;
                margin: 14px 0 28px ;
                font-family: "Open Sans",sans-serif;
                line-height: 26px;
                font-weight: 400;
                color: #888;

                span{
                    color: #d4d4d4;
                }
            }

                .btn{
        
                    a{
                        display:block;
                        text-decoration:none;
                        color:white;
                        font-family: 'Montserrat', sans-serif;
                        font-weight:600;
                        padding:15px 25px;
                        border-radius:50px;
                        border:2px solid #aceb2f;
                        font-size:14px;
                    }
                }

        }

    `

    export default Token