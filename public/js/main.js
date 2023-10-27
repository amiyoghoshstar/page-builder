const editor = grapesjs.init({
  container: '#editor',
  fromElement: true,
  width: 'auto',
  StorageManager: false,
  assetManager: {
    storageType: '',
    storeOnChange: true,
    storeAfterUpload: true,
    upload: 'https://localhost/assets/upload', //for temporary storage
    assets: [],
    uploadFile: function (e) {
      var files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
      var formData = new FormData();
      for (var i in files) {
        formData.append('file-' + i, files[i]); //containing all the selected images from local
      }
      $.ajax({
        url: 'https://www.congeriem.com/grapejs-upload-image.php',
        type: 'POST',
        data: formData,
        contentType: false,
        crossDomain: true,
        dataType: 'json',
        mimeType: 'multipart/form-data',
        processData: false,
        headers: {
          'Access-Control-Request-Headers': 'x-requested-with',
        },
        success: function (result) {
          var myJSON = [];
          $.each(result['data'], function (key, value) {
            myJSON[key] = value;
          });
          var images = myJSON;
          editor.AssetManager.add(images); //adding images to asset  manager of GrapesJS
        },
      });
    },
  },
  //   plugins: ['grapesjs-preset-webpage'],
  canvas: {
    styles: [
      'https://www.congeriem.com/static/version1698305316/frontend/Congeriem/luma/en_US/css/congeriem_style.min.css',
    ],
  },
});

var assetBaseUrl = 'https://www.congeriem.com/media/grapejs/';

const blockCode = `
  <section class="pd-ptop6 pd-box001">
    <div class="pd-page">
      <div class="pd-headerTxt pd-textCenter">Features Icon</div>
      <div class="pd-row pd-textCenter">
        <div class="pd-clm04">
          <div class="pd-iconCard">
            <div class="pd-iconImg"><img src="${assetBaseUrl}images/pd_start.svg"></div>
            <div class="pd-iconTxt"><span>High Quality</span></div>
          </div>
        </div>
        <div class="pd-clm04">
          <div class="pd-iconCard">
            <div class="pd-iconImg"><img src="${assetBaseUrl}images/pd_update.svg"></div>
            <div class="pd-iconTxt"><span>Regular Update</span></div>
          </div>
        </div>
        <div class="pd-clm04">
          <div class="pd-iconCard">
            <div class="pd-iconImg"><img src="${assetBaseUrl}images/pd_design.svg"></div>
            <div class="pd-iconTxt"><span>Creative Design</span></div>
          </div>
        </div>
        <div class="pd-clm04">
          <div class="pd-iconCard">
            <div class="pd-iconImg"><img src="${assetBaseUrl}images/pd_online.svg"></div>
            <div class="pd-iconTxt"><span>Online Support</span></div>
          </div>
        </div>
      </div>
      <div class="pd-row pd-mtop4 pd-textCenter">
        <div class="pd-clm04">
          <div class="pd-iconCard">
            <div class="pd-iconImg"><img src="${assetBaseUrl}images/pd_control.svg"></div>
            <div class="pd-iconTxt"><span>Control System</span></div>
          </div>
        </div>
        <div class="pd-clm04">
          <div class="pd-iconCard">
            <div class="pd-iconImg"><img src="${assetBaseUrl}images/pd_rocket.svg"></div>
            <div class="pd-iconTxt"><span>Easy to Use</span></div>
          </div>
        </div>
        <div class="pd-clm04">
          <div class="pd-iconCard">
            <div class="pd-iconImg"><img src="${assetBaseUrl}images/pd_backup.svg"></div>
            <div class="pd-iconTxt"><span>Automated Backup</span></div>
          </div>
        </div>
        <div class="pd-clm04">
          <div class="pd-iconCard">
            <div class="pd-iconImg"><img src="${assetBaseUrl}images/pd_track.svg"></div>
            <div class="pd-iconTxt"><span>Track Anything</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

// Register the custom block
editor.BlockManager.add('custom-block', {
  label: 'Feature Icon',
  content: blockCode,
});

const TwoImageMiddleText = `<section class="pd-ptop6 pd-pbottom6 pd-box002">
<div class="pd-page">
            
    <div class="pd-row pd-textCenter">
        <div class="pd-clm03">
            <div class="pd-imgbx">
                <img src="${assetBaseUrl}images/image_01.jpg">
            </div>
        </div>
        <div class="pd-clm03 pd-pright1 pd-pleft1">
            <div class="pd-headerTxt">
                Bluetooth Calling
            </div>

            <div class="pd-text">
                <p>1.96” HD Display: Designed to make a strong statement, Marv Raze features a beautiful 1.96” HD screen that encompasses various watch faces, bringing elegance to your wrist. With 500 nits peak brightness, this smart watch offers extra clarity.</p>
                <p>The smart watch will run uninterrupted for at least 7 days on a single charge (without heavy usage). If you use BT calling, Marv will run for about 2 days.</p>
            </div>
        </div>
        <div class="pd-clm03">
            <div class="pd-imgbx">
                <img src="${assetBaseUrl}images/image_02.jpg">
            </div>
        </div>
    </div>

</div>
</section>`;
// Register the custom block
editor.BlockManager.add('Two-image-middle-text', {
  label: 'Two Image Middle Text',
  content: TwoImageMiddleText,
});

const fullImage = `<section class="pd-box003">
<div class="pd-page">
            
    <div class="pd-imgbx">
        <img src="${assetBaseUrl}images/image_03.jpg">
    </div>

</div>
</section>`;
// Register the custom block
editor.BlockManager.add('full-image', {
  label: 'Full image',
  content: fullImage,
});

const TwoSideTextMiddleImage = `<section class="pd-ptop6 pd-pbottom6 pd-box004">
<div class="pd-page">
            
    <div class="pd-row pd-textCenter">
        
        <div class="pd-clm03 pd-pright1 pd-pleft1">
            <div class="pd-headerTxt">
                Bluetooth Calling
            </div>

            <div class="pd-text">
                <p>1.96” HD Display: Designed to make a strong statement, Marv Raze features a beautiful 1.96” HD screen that encompasses various watch faces, bringing elegance to your wrist. With 500 nits peak brightness, this smart watch offers extra clarity.</p>
                <p>The smart watch will run uninterrupted for at least 7 days on a single charge (without heavy usage). If you use BT calling, Marv will run for about 2 days.</p>
            </div>
        </div>

        <div class="pd-clm03">
            <div class="pd-imgbx">
                <img src="${assetBaseUrl}images/image_02.jpg">
            </div>
        </div>

        <div class="pd-clm03 pd-pright1 pd-pleft1">
            <div class="pd-headerTxt">
                Bluetooth Calling
            </div>

            <div class="pd-text">
                <p>1.96” HD Display: Designed to make a strong statement, Marv Raze features a beautiful 1.96” HD screen that encompasses various watch faces, bringing elegance to your wrist. With 500 nits peak brightness, this smart watch offers extra clarity.</p>
                <p>The smart watch will run uninterrupted for at least 7 days on a single charge (without heavy usage). If you use BT calling, Marv will run for about 2 days.</p>
            </div>
        </div>

    </div>

</div>
</section>`;
// Register the custom block
editor.BlockManager.add('two-side-text-middle-image', {
  label: 'Both Side Text Middle Image',
  content: TwoSideTextMiddleImage,
});

const threeImagesWithTittle = `<section class="pd-pbottom6 pd-box005">
<div class="pd-page">
            
    <div class="pd-row pd-textCenter">
        
        <div class="pd-clm03">
            <div class="pd-imgbx pd-mbottom2">
                <img src="${assetBaseUrl}images/image_02.jpg">
            </div>

            <div class="pd-headerTxt2">
                1.96" Display
            </div>
        </div>

        <div class="pd-clm03">
            <div class="pd-imgbx pd-mbottom2">
                <img src="${assetBaseUrl}images/image_01.jpg">
            </div>
            <div class="pd-headerTxt2">
                60Hz Refresh Rate
            </div>
        </div>

        <div class="pd-clm03">
            <div class="pd-imgbx pd-mbottom2">
                <img src="${assetBaseUrl}images/image_02.jpg">
            </div>
            <div class="pd-headerTxt2">
                Health Monitoring
            </div>
        </div>
        
    </div>

</div>
</section>`;
// Register the custom block
editor.BlockManager.add('three-images-with-title', {
  label: 'Three Image with caption',
  content: threeImagesWithTittle,
});

const twoColumnImageandText = `<section class="pd-pbottom6 pd-box006">
<div class="pd-page">
            
    <div class="pd-row">
        
        <div class="pd-clm02">
            <div class="pd-imgbx">
                <img src="${assetBaseUrl}images/image_05.jpg">
            </div>
        </div>

        <div class="pd-clm02">
            <div class="pd-headerTxt">
                Bluetooth Calling
            </div>
            <div class="pd-text">
                <ul>
                    <li>
                        <p>1.96” HD Display: Designed to make a strong statement, Marv Raze features a beautiful 1.96” HD screen that encompasses various watch faces, bringing elegance to your wrist. With 500 nits peak brightness, this smart watch offers extra clarity.</p>
                    </li>
                    <li>
                        <p>The smart watch will run uninterrupted for at least 7 days on a single charge (without heavy usage). If you use BT calling, Marv will run for about 2 days.</p>
                    </li>
                    <li>
                        <p>1.96” HD Display: Designed to make a strong statement, Marv Raze features a beautiful 1.96” HD screen that encompasses various watch faces, bringing elegance to your wrist. With 500 nits peak brightness, this smart watch offers extra clarity.</p>
                    </li>
                    <li>
                        <p>The smart watch will run uninterrupted for at least 7 days on a single charge (without heavy usage). If you use BT calling, Marv will run for about 2 days.</p>
                    </li>
                    <li>
                        <p>1.96” HD Display: Designed to make a strong statement, Marv Raze features a beautiful 1.96” HD screen that encompasses various watch faces, bringing elegance to your wrist. With 500 nits peak brightness, this smart watch offers extra clarity.</p>
                    </li>
                    <li>
                        <p>The smart watch will run uninterrupted for at least 7 days on a single charge (without heavy usage). If you use BT calling, Marv will run for about 2 days.</p>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>

</div>
</section>`;
// Register the custom block
editor.BlockManager.add('two-column-image-with-text', {
  label: 'Two Column Image with text',
  content: twoColumnImageandText,
});

const twoColumnMultipleSection = `<section class="pd-pbottom6 pd-box008">
<div class="pd-page">

    <div class="pd-headerTxt pd-textCenter">
        About This Item
    </div>

    <ul class="pd-dataList">
        <li>
            <div class="pd-dataBox">
                <div class="pd-dataImg">
                    <img src="${assetBaseUrl}images/image_07.jpg">
                </div>
                <div class="pd-dataTxt">
                    <div class="pd-headerTxt3">
                        Everything Within Reach
                    </div>
                    <p>With less than 1mm writing accuracy and writing height, all interactive functions can be operated within several ms, bringing smoother learning and working experience.</p>
                    <p>Common application scenarios are classrooms, commercial offices, medical facilities, etc.</p>
                </div>
            </div>
        </li>
        <li>
            <div class="pd-dataBox">
                <div class="pd-dataImg">
                    <img src="${assetBaseUrl}images/image_08.jpg">
                </div>
                <div class="pd-dataTxt">
                    <div class="pd-headerTxt3">
                        Everything Within Reach
                    </div>
                    <div class="pd-text">
                        <ul>
                            <li>Wifi Supported</li>
                            <li>Flash Drive Supported</li>
                            <li>USB Wire Supported</li>
                            <li>Hardwire Supported</li>
                            <li>Mobile Device Supported</li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="pd-dataBox">
                <div class="pd-dataImg">
                    <img src="${assetBaseUrl}images/image_07.jpg">
                </div>
                <div class="pd-dataTxt">
                    <div class="pd-headerTxt3">
                        Everything Within Reach
                    </div>
                    <p>With less than 1mm writing accuracy and writing height, all interactive functions can be operated within several ms, bringing smoother learning and working experience.</p>
                    <p>Common application scenarios are classrooms, commercial offices, medical facilities, etc.</p>
                </div>
            </div>
        </li>
        <li>
            <div class="pd-dataBox">
                <div class="pd-dataImg">
                    <img src="${assetBaseUrl}images/image_08.jpg">
                </div>
                <div class="pd-dataTxt">
                    <div class="pd-headerTxt3">
                        Everything Within Reach
                    </div>
                    <p>With less than 1mm writing accuracy and writing height, all interactive functions can be operated within several ms, bringing smoother learning and working experience.</p>
                    <p>Common application scenarios are classrooms, commercial offices, medical facilities, etc.</p>
                </div>
            </div>
        </li>
    </ul>

</div>
</section>`;
// Register the custom block
editor.BlockManager.add('two-column-multiple-section', {
  label: 'Two Column Multiple Section',
  content: twoColumnMultipleSection,
});

const twoColumnTwoImage = `<section class="pd-pbottom6 pd-box008">
<div class="pd-page">
            
    <div class="pd-row pd-textCenter">
        
        <div class="pd-clm02">
            <div class="pd-imgbx">
                <img src="${assetBaseUrl}images/image_05.jpg">
            </div>
        </div>

        <div class="pd-clm02">
            <div class="pd-imgbx">
                <img src="${assetBaseUrl}images/image_06.jpg">
            </div>
        </div>
        
    </div>

</div>
</section>`;
// Register the custom block
editor.BlockManager.add('two-column-two-image', {
  label: 'Two Column Two Image',
  content: twoColumnTwoImage,
});
