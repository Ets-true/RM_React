import React from 'react'
import { useEffect, useState } from 'react'
import "./form.scss"
import $ from 'jquery'

export default function Form(closeForm) {

  const sendMail = () => {

    closeForm.closeForm()
    console.log("clicked")
    let formData = new FormData();
    // let inputFiles = files
    // console.log(inputFiles)

    let name = document.querySelector('#name').value
    let phone = document.querySelector('#phone').value
    let email = document.querySelector('#email').value
    let text = document.querySelector('#text').value

    // let filesInp = document.querySelector("#file").files
    // console.log(filesInp)
  
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('text', text);
    // formData.append('files', inputFiles);

    $.ajax({
      url: 'https://mail.regeneration-oil.ru/mail.php', 
      dataType: 'text', 
      cache: false,
      contentType: false,
      processData: false,
      data: formData,                         
      type: 'post',
      beforeSend: function(){
      },
      success: function(){
        
      }
   });

    document.querySelector('#name').value = ''
    document.querySelector('#phone').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#text').value = ''

    document.querySelector('.push').style.display =  "block"
    document.querySelector('body').style.overflowY =  "hidden"
    document.querySelector('body').style.paddingRight =  "7px"
    setTimeout(() => {
      document.querySelector('.push').style.opacity =  1
      setTimeout(() => {
        document.querySelector('.push').style.opacity =  0
        document.querySelector('body').style.overflowY =  "scroll"
        document.querySelector('body').style.paddingRight =  "0px"
        setTimeout(() => {
          document.querySelector('.push').style.display =  "none"
        }, 5000);
      }, 2000);
    }, 100);
    
    
  }

 

  // function OnInput() {
  //   if(this.scrollHeight<315){
  //     this.style.height = 'auto';
  //     this.style.height = (this.scrollHeight) + 'px';
  //   } else {
  //     this.style.overflow = "scroll"
  //   }
  // }

  // const [files, setfiles] = useState([]) 
  // let inputLabel, input, array, attachedReady, filesObj,filesArray

  // const showFiles = (flag) => {
  //   if(flag == true){
  //     inputLabel.style.display = "none"
  //     attachedReady.style.display = "block"
  //   } else {
  //     input = document.querySelector("#file")
  //     inputLabel = document.querySelector("#input-label")
  //     attachedReady= document.querySelector(".attached-ready")
     

  //     inputLabel.style.display = "block"
  //     attachedReady.style.display = "none"
  //   }
  // }


  // const onChange = () => {
  //   filesObj = Object.entries(input.files);
  //   input.value = ''
  //   filesArray = []
  //   filesObj.map(function(file, i){
  //     filesArray[i] = file[1]
  //   })
  //   setfiles(files => [...files, ...filesArray])
  //   showFiles(true)
  // }

  // const onDeleteFile = (i) => {
  //   array = files
  //   array.splice(i, 1)
  //   if(array.length == 0){
  //     console.log(array.length)
  //     showFiles(false)
  //   }
  //   setfiles([...array])
  // }


  // useEffect(() => {
  //   input = document.querySelector("#file")
  //   inputLabel = document.querySelector("#input-label")
  //   input.addEventListener('change', onChange)
  //   attachedReady= document.querySelector(".attached-ready")

  //   let tx = document.getElementsByTagName('textarea');
  //   for (let i = 0; i < tx.length; i++) {
  //     tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
  //     tx[i].addEventListener("input", OnInput, false);
  //   }
  // }, [])



  return (
    <div className="form">
      <div className="form__wrapper">
        <div className="form__background" onClick={() => { closeForm.closeForm() }}></div>
        <div className="form__body">
          <div className="form__animationBlock">
            <div className="form__title">???????????????? ??????????</div>
            <div className="line">
              <div className="line__body"></div>
            </div>
            <div className="line">
              <div className="line__body"></div>
            </div>
            <div className="dataBlock__column_left">
              <div className="point">
                <div className="point__num">01</div>
                <div className="point__title">???????? ??????:</div>
              </div>
              <input id="name" type="text" placeholder="???????? ????????????" />
              <div className="point">
                <div className="point__num">02</div>
                <div className="point__title">Email:</div>
              </div>
              <input id="email" className="mail-input" type="text" placeholder="info@gmail.com" />
              <div className="point">
                <div className="point__num">03</div>
                <div className="point__title">??????????????:</div>
              </div>
              <input id="phone" type="text" placeholder="+7 (495) 900-70-70" />
            </div>
            <div className="dataBlock__column_right">
              <div className="wrapper">
                <div className="posab-wrapper">
                  <div className="point">
                    <div className="point__num">04</div>
                    <div className="point__title">??????????????????:</div>
                  </div>
                  <textarea id="text" placeholder='?????????? ???????????? ?????????????????? ???????????? ??????????' />

                  <div className="attach">
                    {/* <div className="attach-line"></div>
                    <div className="attach-button">
                      <label for="file" id="input-label">???????????????????? ??????????????????</label>
                      <input type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />  

                      <div className="attached-ready">
                        {files.length>0 && files.map(function(file, i){
                          return (
                            <div key={i} className="attached-file">
                              <div className="file-name">{file.name}</div>
                              <div className="delete-button" onClick={()=>onDeleteFile(i)}>??????????????</div>
                            </div>
                          )
                        })}
                        <div className="add-button"><label for="file">????????????????</label></div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

            </div>
            <div className="send-button" onClick={() => sendMail()}>
              <div className="loading"></div>
              ??????????????????
            </div>
            <div className="close-button" onClick={() => { closeForm.closeForm() }}>
              <div className="close-icon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
