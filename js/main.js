var dataController = (function(){
    var Folder = function(id,stringList){
        this.id = id;
        this.stringList = stringList;
        this.list = [];
    }

    Folder.prototype.convertArr = function(){
        this. list = this.stringList.split(',')
    };

    var File = function(type,name,link){
        this.type = type;
        this.name = name;
        this.link = link;
    }

// KHI CẬP NHẬT DATA PHẢI THÊM VÀO CẢ HAI allFolders và allFiles 

    data = {
        allFolders:[
            new Folder('font','My Font,Google Font,dafont,Font Squirrel'),
            new Folder('sfx','My SFX,Youtube Library,freeSound.org,Just Youtube'),
            new Folder('pics','Freepik,Flaticon,Unsplash,Pexels'),
            new Folder('plugin','Motion 2,Animation Composer,Move Anchor Point,Ease and Wizz,Motion Bro,Big Pack,FX Console'),
            new Folder('free','Huge Collection,30 Days of AE,AE Tips and Tricks,Quick Tips SOM,Motion Design School,Illustrator Fundamental,Gigantic (Flat-Style)'),
        ],
        allFiles:[
            new File('my','My Font','https://drive.google.com/open?id=1eXzYeSKPv1ojqLg9p9X5tuJ0hBqWa6qF'),
            new File('web','Google Font','https://fonts.google.com/'),
            new File('web','dafont','https://www.dafont.com/'),
            new File('web','Font Squirrel','https://www.fontsquirrel.com/'),

            new File('my','My SFX','https://drive.google.com/open?id=1uFPrewLsW1YIITmCGhBVhQXAfMJ--Zfd'),
            new File('yt','Youtube Library','https://www.youtube.com/audiolibrary/music?nv=1'),
            new File('web','freeSound.org','https://freesound.org/'),
            new File('yt','Just Youtube','https://www.youtube.com/playlist?list=PL07T73hZV3sNEB-OJb77OtxlWMJU6pPak'),

            new File('web','Freepik','https://www.freepik.com/'),
            new File('web','Flaticon','https://www.flaticon.com/'),
            new File('web','Unsplash','https://unsplash.com/'),
            new File('web','Pexels','https://www.pexels.com/vi-vn/'),

            new File('web','Motion 2','https://drive.google.com/open?id=1W_s7D9PfY3ZA2w2RZR9Xy8nRsE3ycMxr'),
            new File('web','Animation Composer','https://drive.google.com/open?id=1de_mzvcDnysTt3JLpzfUDoXtGLYTbfz6'),
            new File('web','Move Anchor Point','https://drive.google.com/open?id=1SD5AItC17w1wg162bFKvE6dcGijgRRcy'),
            new File('web','Ease and Wizz','https://drive.google.com/open?id=1M4gllp_FuKnylTTud3jiFy2MTyRTkNGj'),
            new File('web','Motion Bro','https://drive.google.com/open?id=1QlkgvYq93MdhyzmR05A4m8knRmwm9ZYx'),
            new File('web','Big Pack','https://drive.google.com/open?id=197DRZBqIlDKtdFJ8wb_cdtah1WBSPQFZ'),
            new File('web','FX Console','https://drive.google.com/open?id=19FCsTa2HzNkW686ggmlGAW82vYmEM1Se'),

            new File('yt','Huge Collection','https://www.youtube.com/playlist?list=PLneP6sxOrtB3N_Pr6Yxh6kvd9cGAzZFfx'),
            new File('yt','30 Days of AE','https://www.youtube.com/watch?v=rcfCZ1J6mIM&list=PLunnePbpOeTRCDRkNAXlimhytFM8bfyof'),
            new File('yt','AE Tips and Tricks','https://www.youtube.com/watch?v=DRI4MzCqufE&list=PL2usXazwdqvlNOZX6wR8cI0yIoXZ1Qz24'),
            new File('yt','Quick Tips SOM','https://www.youtube.com/watch?v=cx3Jpz4tYj4&list=PLunnePbpOeTQ1XntvRfmqWQ0e70BL0kY4'),
            new File('web','Motion Design School','https://motiondesign.school/collections/courses'),
            new File('web','Illustrator Fundamental','https://motiondesign.school/products/adobe-illustrator-fundamentals'),
            new File('yt','Gigantic (Flat-Style)','https://www.youtube.com/channel/UCX4mqbvv5lGqLpI4FYlJt4w')

        ]
    }



    data.allFolders.forEach((cur)=>{
        cur.convertArr();
    })

    return{

        getFolder : function(ID){

            var list, folderIDList = [], folderID, index;

            //2. tạo array mới chứa id của các folder
            for(var i = 0; i < data.allFolders.length; i++){
                folderIDList.push(data.allFolders[i].id)
            }
            //3. tìm ID trong đó
            index = folderIDList.indexOf(ID)
            if(folderID !== -1){
                list = data.allFolders[index].list
            } else{
                throw console.error('not Found Folder');
                
                
            }
            return list
        },

        getFile : function(list){
            var fileData, indexList;

            //1. tạo 1 array lưu toàn bộ name của file
            var fileNameArray = data.allFiles.map((file)=>{
                return file.name;
            })

            //2. lấy từng phần tử của list(input), tìm index của nó trong data, lưu đống index vào 1 măng
            indexList = list.map((name)=>{
                var x =  fileNameArray.indexOf(name);
                if(x == -1){
                    console.log('cant find ' + name)
                }
                return x
            })

            fileData = indexList.map((cur)=>{
                return data.allFiles[cur]
            })


            return fileData
        },
        testing : function(){
            console.log(data);
        }
    }
})();


var UIController = (function(){
    var DOMStrings = {
        folderContainer : '.folder__container',
        fileCotainer: '.file__container'
    }
    return{
        displayFiles : function(array){
            var html, newHtml
            newHtml ='';

            //thay thế nội dung vào HTML template
            array.forEach((file)=>{
                html = `
                <a href="%link%" target="_blank" class="file__item ">
                    <div class="file__bg file__bg-%type%"></div>
                    <p class="file__title">%name%</p>
                </a>
                `
                html = html.replace('%link%',file.link);
                html = html.replace('%name%',file.name);

                if(file.type === 'my'){
                    html = html.replace('%type%','file');

                }else if(file.type === 'web'){
                    html = html.replace('%type%','web');

                }else if(file.type === 'yt'){
                    html = html.replace('%type%','yt');
                }
                newHtml += html;
                
            })
            document.querySelector(DOMStrings.fileCotainer).innerHTML= '';
            document.querySelector(DOMStrings.fileCotainer).insertAdjacentHTML("afterbegin",newHtml);
        },

        getDOMStrings: function(){
            return DOMStrings;
        },

    }
})();

var controller = (function(dataCtrl,UICtrl){
        var DOM = UICtrl.getDOMStrings();
        var setUpEvent = function(ID){
            //1. dựa vào ID tìm folder trong data trar ra list các file
            var fileList = dataCtrl.getFolder(ID);

            //2. lấy ra chuẩn các file trong data ném vào 1 array
            var fileArray = dataCtrl.getFile(fileList);

            //3. in list các file lên UI
            UICtrl.displayFiles(fileArray);
        }

        document.querySelector(DOM.folderContainer).addEventListener('click',(e)=>{
            var ID = e.target.id;
        
            if(ID){
                setUpEvent(ID)
            }
        })
;
    return{
        init: function(id){
            setUpEvent(id)
        }
    }
})(dataController,UIController);

controller.init('free')