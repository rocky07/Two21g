Ext.define('Two21G.controller.Main', {
    extend: 'Ext.app.Controller',
    questionId:'1',
    blogRecord:'',
    config: {
        refs: {
			searchAction:'button[action=getStatus]',
			mainPanel:'mainpanel',
			newBlog:'button[action=newBlog]',
			dosaveblog:'button[action=savenewblog]',
			settingsButton:'button[action=settings]',
			saveSettingsButton:'button[action=savesettings]',
			editBlogButton:'button[action=editBlog]',
			askQButton:'button[action=askQ]',
			saveQButton:'button[action=savenewQ]',
			settingsPanel:'settings',
			addAnswersButton:'button[action=addAnswers]',
			savenewanswersButton:'button[action=savenewanswers]',
			questionsPanel:'qas',
			newBlogFormPanel:'newblog'
				
        },
        control: {
        	searchAction:{
        		tap:'getStatus'
        	},
        	'blogs':{
        		disclose:'showBlogs'
        	},
        	'qas':{
        		disclose:'showAnswers'
        	},
        	newBlog:{
        		tap:'showNewBlog'
        	},
        	dosaveblog:{
        		tap:'doSaveBlog'
        	},
        	settingsButton:{
        		tap:'doLoadSettings'
        	},
        	saveSettingsButton:{
        		tap:'doSaveSettings'
        	},
        	editBlogButton:{
        		tap:'doLoadEditBlog'
        	},
        	askQButton:{
        		tap:'doLoadAskQ'
        	},
        	saveQButton:{
        		tap:'saveNewQ'
        	},
        	addAnswersButton:{
        		tap:'doLoadAnswersPanel'
        	},
        	savenewanswersButton:{
        		tap:'saveNewAnswers'
        	},
        	'settings':{
        		show:'doLoadSettings'
        	}
        }
    },
    getStatus:function(btn){
    	var formPanel=btn.up('panel');
    	
    	Ext.Ajax.request({
    		//url:'data.json',
    		url:'https://ceac.state.gov/CEACStatTracker/Status.aspx?App=NIV',    	
    		method: 'POST',
    	    params: {
    		ctl00$ContentPlaceHolder1$ddlApplications:formPanel.getValues().ctl00$ContentPlaceHolder1$ddlApplications,
    		ctl00$ContentPlaceHolder1$ddlLocation:formPanel.getValues().ctl00$ContentPlaceHolder1$ddlLocation,
    		ctl00$ContentPlaceHolder1$txbCase:formPanel.getValues().ctl00$ContentPlaceHolder1$txbCase,    
    		ctl00$ToolkitScriptManager1:"ctl00$ContentPlaceHolder1$UpdatePanel1|ctl00$ContentPlaceHolder1$btnSubmit",
    		ctl00_ToolkitScriptManager1_HiddenField:";;AjaxControlToolkit, Version=3.5.51116.0, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e:en-US:2a06c7e2-728e-4b15-83d6-9b269fb7261e:de1feab2:f2c8e708:8613aea7:f9cec9bc:3202a5a2:a67c2700:720a52bf:589eaa30:ab09e3fe:87104b7c:be6fb298;",    		
    		__VIEWSTATE:"/wEPaA8FDzhkMTA4OGYwNzRhZGZmMxgBBR5fX0NvbnRyb2xzUmVxdWlyZVBvc3RCYWNrS2V5X18WAQUjY3RsMDAkQ29udGVudFBsYWNlSG9sZGVyMSRidG5TdWJtaXTc4EHbn8YmMNKVz1zZSI7UU7OyGw==",
    		__EVENTVALIDATION:"/wEW6gECyPfI9QsCuueB3QMCu8WcswoC3KrOwwYCxfTx9gIC1+6r8AoC9MfXtA8C5tme3wICkcD33g8C/tnu3wIC/pjUdQLE3KK2AgKUzuy0CAKBsebrDgLUneWfDAKJleyfAwKIpuzABAL6mIB2Av/Zit8CAqjRrcABAoWViJ8DAtGuscABAv6YhHYC4a3QtgQClLGy6w4C8ce7tQ8C662AtwQCyuP9gAUC7s6YtAgC9Nn63wIC7auJ6QECobiT6gsC/MfvtQ8C6c7AtAgC7quZ6QECn8DT3g8CgsD/3g8Csbjf6gsC4tme3wICvdSVtgEC/7Kr9AsCk8D33g8C46uV6QEC9seftQ8CkLHu6w4CvefmqQYChbHm6w4Csuf6qQYCvbiT6gsChLG26w4Csbif6gsC2bKb9AsC5q28twQCg8DH3g8C/bT+wQ4Ck7HS6g4C4a2ItwQCjpXwnwMCorj76gsCsLjr6gsCgc6wtAgC09zmtQIC+pjAdQKAwK/fDwKGldSfAwKeg+n1DQKriub0DgK5zbOsDwKpiqb1DgK7ir71DgLvmNR1Aq2c0Z4MAqWK/vQOAu/8/aoFAv3Hq7UPAqKcyZ4MAt7c1rUCAuSYrHYC7JiEdgKTzvi0CAKFlZCfAwL9x9e0DwLLx5e1DwKZldyfAwKAlcCfAwKN5+KpBgLm6paABgLl/PmqBQK/iuL0DgK91OW2AQKEwJveDwLcrsXfAQKP1KW2AQKhuPfqCwLE4+GABQKpnOWfDAKP586pBgLpzui0CAKvnL2fDALersnfAQKazsS0CALn6tqfBgLszsS0CALNx9e0DwLf3Mq1AgLd48GABQKAleSfAwL3x++1DwLIsrf0CwKbwP/eDwKq0dHfAQLw2ZLfAgKjiv70DgKw1PW2AQL+tMrBDgLmmIR2Au/8haoFAvPZ4t8CApKx4usOApXOxLQIApyxkusOAtau0d8BAoextusOAuTZ1t4CApOx5usOAvmY2HUCqN+itgIC/8eLtQ8C6vypqwUCq4ra9A4CkrG26w4C9ceLtQ8C9Me/tQ8C4Py1qgUC/8e/tQ8CvLjv6gsC0q65wAEC+ceftQ8CsriT6gsCwMfftA8Cz+PtgAUC6/z5qgUCxOPtgAUC0p+wbALE46GBBQL3x8O0DwL3x4e1DwK3lfyfAwL0x6O1DwL/mLx2AoiV5J8DAtGd3Z4MAurOwLQIAorUsbYBAtuurcABArGmiMAEAv2YqHYCiJXYnwMC1a7x3wECncD/3g8CyLTywQ4Ct6aAwAQC+JjwdQL9q5XpAQLIx5O1DwKeseLrDgLyx5O1DwK356aqBgLC4/WABQKe/IGqBQKe/PmqBQKEldifAwL+2Y7fAgL2x6e1DwLfrrXAAQL39YyrCAKTzsC0CALRnYmfDAL56rqABgLNtK7CDgLn6qqABgL5mNB1AoSx/usOAvjZgt8CAs2u+d8BAvTHw7QPAtvj0YAFAqucyZ4MAtOdpZ8MAtvjxYAFApLA994PApmVxJ8DArDUqbYBAv6YjHYCsqbgwAQClLH+6w4C687EtAgCjZX0nwMCq4ri9A4CrpzJngwC4fyZqgUCnLGe6w4CnvzxqgUC/9m63wICx669wAEChZWAnwMC8JiodgKOg431DQLrzvy0CALwmIR2Atauxd8BAoaV9J8DAur8jaoFAuyYjHYC4JjUdQLVrsXfAQKaseLrDgKinK2fDAKI1IG2AQLW3Ja1AgKinMGeDALrzsi0CAKo36q2AgKFsZ7rDgL/mIR2AouVkJ8DApb8vaoFApWx/usOAuXZvt8CAviYiHYCzrLj9AsC9LKa5g4C5sD0xwQC+NCVogqHVmvoKdmDyBKnOGpeoKNMQiRk9g==",
    		__ASYNCPOST:true
    		//ctl00$ContentPlaceHolder1$btnSubmit.x:103,
    		//ctl00$ContentPlaceHolder1$btnSubmit.y:12
    	    },
    	    success:function(response){
				var responseData=response.responseText;
				var start=responseData.indexOf("status-content")-12;
				var end=responseData.indexOf("ctl00_ContentPlaceHolder1_ucApplicationStatusView_lnkContactUrl");
				var result='';
				if(start>0 && end>0){
					result=responseData.substring(start,start+end);
				}else{
					result=responseData;
				}
	    			Ext.create('Ext.Panel', { 
		    		    height : 400, 
		    		    width : 300,
		    		    centered:true,		    		    
		    		    //draggable : true,
		    		    hideOnMaskTap:true,
		    		    modal: true,
		    		    html : result, 
		    		    items : [ 
		    		        { 
		    		        xtype : 'toolbar', 
		    		        docked : 'top', 
		    		        title : 'Status' 
		    		        } 
		    		    ] 
		    		}).show();  
	    	},
	    	failure:function(response){
	    		//alert(JSON.stringify(response));
	    		Ext.create('Ext.Panel', { 
	    		    height : 400, 
	    		    width : 300,
	    		    centered:true,		    		    
	    		    //draggable : true,
	    		    hideOnMaskTap:true,
	    		    modal: true,
	    		    html : JSON.stringify(response), 
	    		    items : [ 
	    		        { 
	    		        xtype : 'toolbar', 
	    		        docked : 'top', 
	    		        title : 'Error' 
	    		        } 
	    		    ] 
	    		}).show(); 
	    		console.log(response);
	    	}
    	});
    },
    processResponse:function(responseString){
    	
    },
    showBlogs:function(list,record){
    	this.blogRecord=record;    	
    	this.getMainPanel().push({
            xtype:'panel',
            items:[
				{
				    xtype:'toolbar',
				    docked:'top',
				    items:[
				           {
				           text:'Edit',				           
				           itemId:'editBlog',
				           action:'editBlog'
				           }
				           ]
				    }
                   ],
            scrollable: {
                direction: 'both',
                directionLock: true
            },
            
            styleHtmlContent:true,
            title: record.get('title'),
            html:record.get('blog')
            });
    		//hides the edit button for non blog owners
	    	if(Two21G.app.userId!=record.get('avatar')){
	    		Ext.ComponentQuery.query('button[itemId="editBlog"]')[0].hide()
	    	}
			//this.getBlogDetails().setData(record.getData())
    },
    showAnswers:function(list,record){
    	this.questionId=record.get('id');
    	var me=this;
    	Ext.Ajax.request({
    		url:'server/listanswers.php',    		    
    		method: 'POST',
    	    params: {
    			questionId:record.get('id')
    		},
    	    success:function(response){
				var responseData=response.responseText;
				me.getMainPanel().push({
		            xtype:'dataview',		            
		            store:{
						fields:['id','avatar','answer'],
						data:responseData
							},
		            scrollable: {
		                direction: 'both',
		                directionLock: true
		            },
		            items:[
		   				{
		   				    xtype:'toolbar',
		   				    docked:'top',
		   				    items:[
		   				           {
		   				           text:'Reply',
		   				           action:'addAnswers'
		   				           }
		   				           ]
		   				    }
		                      ],
		            styleHtmlContent:true,
		            title: record.get('question'),		            
		            itemTpl:'<div>{answer}</div><div><i>by {avatar},{created_date}</i></div><br/>'
		            });
				
    	    },
    	    failure:function(){
    	    	console.log("request failed");
    	    }
    	});
		
    },
    showNewBlog:function(){
    	this.getMainPanel().push({xtype:'newblog',
    			title:'New Blog'
    	});
    },
    doSaveBlog:function(btn){
    	var me=this.getMainPanel();
    	var formPanel=btn.up('panel');    	
    	var userId=Ext.getStore('Settings').getAt(0).get('userId')
    	formPanel.submit({
    		url:'server/saveblog.php',
    		params:{
    			userId:userId
    		},
    		success:function(response){
    			console.log(response.responseText);
    			me.pop();
    			Ext.getStore('Blogs').load();
    		},
    		failure:function(){
    			console.log('server error');
    		}
    	})
	},
	doLoadSettings:function(btn){
		var store=Ext.getStore('Settings').getAt(0);		
		if(store){
			this.getSettingsPanel().setValues(store.data);
		}
	},
	doSaveSettings:function(btn){
		var formPanel=btn.up('panel');
		formPanel.submit({
		    url: 'server/savesettings.php',
		    method: 'POST',
		    success: function(response,data) {
				responseObj=data;				
		        if(responseObj.success){
		        	var store=Ext.getStore('Settings');
		    		if(Ext.getStore('Settings').getAt(0)){
		    			items=Ext.getStore('Settings').getAt(0).getData();
		    			Ext.getStore('Settings').getAt(0).data=data;
		    		}else{
		    			store.add(data);	
		    		}		    				
		    		store.sync();	
		    		Ext.Msg.alert('Updated','Settings updated !');
		        }
		    }
		});		
	},
	doLoadEditBlog:function(btn){	
		this.getMainPanel().push({
			xtype:'newblog',
			title:'Edit',
			record:this.blogRecord
			});
	},
	doLoadAskQ:function(){
		this.getMainPanel().push({xtype:'newq',
			title:'Question'
			});
	},
	saveNewQ:function(btn){
		var me=this.getMainPanel();
		var formPanel=btn.up('panel');    	
    	var userId=Ext.getStore('Settings').getAt(0).get('userId');
    	formPanel.submit({
    		url:'server/savenewq.php',
    		params:{
    			userId:userId
    		},
    		success:function(response){
    			console.log(response.responseText);
    			me.pop();
    			Ext.getStore('Qas').load();
    			
    		},
    		failure:function(){
    			console.log('server error');
    		}
    	})		
	},
	doLoadAnswersPanel:function(){
		this.getMainPanel().push({xtype:'newanswers',
			title:'Reply'
			});
	},
	saveNewAnswers:function(btn){
		var me=this.getMainPanel();
		questionId=this.questionId;
		var formPanel=btn.up('panel');    	
    	var userId=Ext.getStore('Settings').getAt(0).get('userId');
    	formPanel.submit({
    		url:'server/savenewanswers.php',
    		params:{
    			userId:userId,
    			questionId:questionId
    		},
    		success:function(response){
    			console.log(response.responseText);
    			me.pop();
    		},
    		failure:function(){
    			console.log('server error');
    		}
    	})		
	},
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        //initialise with default username/email
		/*if(!Ext.getStore('Settings').getAt(0)){
			Ext.Ajax.request({
				url:'server/savesettings.php',
				params:{
					userId:'',
					name:'anonymous',
					email:''
				}
			});
		}*/
    }
});
