Ext.define('Two21G.view.StatusForm', {
	extend: 'Ext.form.Panel',
	xtype: 'statusform',
	requires:['Ext.field.Select','Ext.form.FieldSet'],
	title:'status',
	config:{
	items:[
	       {
	    	   xtype: 'fieldset',
	    	   items: [{
	    		   xtype: 'selectfield',
	    		   label: 'Visa Type',
	    		   name:'ctl00$ContentPlaceHolder1$ddlApplications',
	    		   options: [
	    		             {text: 'Immigrant Visa (IV)',  value: 'IV'},
	    		             {text: 'Nonimmigrant Visa (NIV)', value: 'NIV'}
	    		             ]

	    	   },
	    	   {
	    		   xtype: 'selectfield',
	    		   label: 'Location',
	    		   name:'ctl00$ContentPlaceHolder1$ddlLocation',
	    		   options: [
	    		             {text: 'INDIA, CHENNAI',  value: 'MDR'},
	    		             {text: 'INDIA, HYDRABAD', value: 'HYD'},
	    		             {text: 'INDIA, KOLKATA', value: 'CLC'},
	    		             {text: 'INDIA, MUMBAI', value: 'BMB'},
	    		             {text: 'INDIA, DELHI', value: 'NDL'}
	    		             ]
	    	   },
	    	   {
	    		   xtype: 'textfield',
	    		   name: 'ctl00$ContentPlaceHolder1$txbCase',
	    		   label: 'CaseNumber'
	    	   },
	    	   {
	    		   xtype: 'button',               
	    		   text: 'Submit',
	    		   action:'getStatus'
	    	   }
	    	   ] 


	       }
	       ]
}	
});
