exports.getVerificationMailHtml = (base_url, token) => {
	return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"><head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
	<!--[if !mso]><!-->
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<!--<![endif]-->
	<!--[if (gte mso 9)|(IE)]>
	<xml>
	  <o:OfficeDocumentSettings>
		<o:AllowPNG/>
		<o:PixelsPerInch>96</o:PixelsPerInch>
	  </o:OfficeDocumentSettings>
	</xml>
	<![endif]-->
	<!--[if (gte mso 9)|(IE)]>
<style type="text/css">
  body {width: 600px;margin: 0 auto;}
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
	<style type="text/css">
  body, p, div {
	font-family: inherit;
	font-size: 14px;
  }
  body {
	color: #000000;
  }
  body a {
	color: #1188E6;
	text-decoration: none;
  }
  p { margin: 0; padding: 0; }
  table.wrapper {
	width:100% !important;
	table-layout: fixed;
	-webkit-font-smoothing: antialiased;
	-webkit-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-ms-text-size-adjust: 100%;
  }
  img.max-width {
	max-width: 100% !important;
  }
  .column.of-2 {
	width: 50%;
  }
  .column.of-3 {
	width: 33.333%;
  }
  .column.of-4 {
	width: 25%;
  }
  @media screen and (max-width:480px) {
	.preheader .rightColumnContent,
	.footer .rightColumnContent {
	  text-align: left !important;
	}
	.preheader .rightColumnContent div,
	.preheader .rightColumnContent span,
	.footer .rightColumnContent div,
	.footer .rightColumnContent span {
	  text-align: left !important;
	}
	.preheader .rightColumnContent,
	.preheader .leftColumnContent {
	  font-size: 80% !important;
	  padding: 5px 0;
	}
	table.wrapper-mobile {
	  width: 100% !important;
	  table-layout: fixed;
	}
	img.max-width {
	  height: auto !important;
	  max-width: 100% !important;
	}
	a.bulletproof-button {
	  display: block !important;
	  width: auto !important;
	  font-size: 80%;
	  padding-left: 0 !important;
	  padding-right: 0 !important;
	}
	.columns {
	  width: 100% !important;
	}
	.column {
	  display: block !important;
	  width: 100% !important;
	  padding-left: 0 !important;
	  padding-right: 0 !important;
	  margin-left: 0 !important;
	  margin-right: 0 !important;
	}
  }
</style>
	<!--user entered Head Start--><link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet"><style>
body {font-family: 'Muli', sans-serif;}
</style><!--End Head user entered-->
  </head>
  <body>
	<center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#FFFFFF;">
	  <div class="webkit">
		<table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
		  <tbody><tr>
			<td valign="top" bgcolor="#FFFFFF" width="100%">
			  <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
				<tbody><tr>
				  <td width="100%">
					<table width="100%" cellpadding="0" cellspacing="0" border="0">
					  <tbody><tr>
						<td>
						  <!--[if mso]>
  <center>
  <table><tr><td width="600">
<![endif]-->
								  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
									<tbody><tr>
									  <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
  <tbody><tr>
	<td role="module-content">
	  <p></p>
	</td>
  </tr>
</tbody></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:30px 20px 30px 20px;" bgcolor="#f6f6f6">
  <tbody>
	<tr role="module-content">
	  <td height="100%" valign="top">
		<table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="331cde94-eb45-45dc-8852-b7dbeb9101d7">
</table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="d8508015-a2cb-488c-9877-d46adf313282">
  <tbody>
	<tr>
	  <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
		<img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" width="185" alt="" data-proportionally-constrained="true" data-responsive="false" src="https://i.imgur.com/xDQ25iF.png" height="67">
	  </td>
	</tr>
  </tbody>
</table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="27716fe9-ee64-4a64-94f9-a4f28bc172a0">
  <tbody>
	<tr>
	  <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
	  </td>
	</tr>
  </tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="948e3f3f-5214-4721-a90e-625a47b1c957" data-mc-module-version="2019-10-22">
  <tbody>
	<tr>
	  <td style="padding:50px 30px 18px 30px; line-height:36px; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 43px">Thanks for signing up!&nbsp;</span></div><div></div></div></td>
	</tr>
  </tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="a10dcb57-ad22-4f4d-b765-1d427dfddb4e" data-mc-module-version="2019-10-22">
  <tbody>
	<tr>
	  <td style="padding:18px 30px 18px 30px; line-height:22px; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 18px">Please verify your email address to</span><span style="color: #000000; font-size: 18px; font-family: arial,helvetica,sans-serif"> register for exciting events and workshops</span><span style="font-size: 18px">.</span></div>
<div style="font-family: inherit; text-align: center"><span style="color: #ecc82c; font-size: 18px"><strong>Thank you!&nbsp;</strong></span></div><div></div></div></td>
	</tr>
  </tbody>
</table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="7770fdab-634a-4f62-a277-1c66b2646d8d">
  <tbody>
	<tr>
	  <td style="padding:0px 0px 20px 0px;" role="module-content" bgcolor="#ffffff">
	  </td>
	</tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="d050540f-4672-4f31-80d9-b395dc08abe1">
	<tbody>
	  <tr>
		<td align="center" bgcolor="#ffffff" class="outer-td" style="padding:0px 0px 0px 0px;">
		  <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
			<tbody>
			  <tr>
			  <td align="center" bgcolor="#ecc82c" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
				<a href="${base_url}/api/confirm/${token}" style="background-color:#ecc82c; border:1px solid #ecc82c; border-color:#ecc82c; border-radius:0px; border-width:1px; color:#000000; display:inline-block; font-size:14px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:12px 40px 12px 40px; text-align:center; text-decoration:none; border-style:solid; font-family:inherit;" target="_blank">Verify Email Now</a>
			  </td>
			  </tr>
			</tbody>
		  </table>
		</td>
	  </tr>
	</tbody>
  </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="7770fdab-634a-4f62-a277-1c66b2646d8d.1">
  <tbody>
	<tr>
	  <td style="padding:0px 0px 50px 0px;" role="module-content" bgcolor="#ffffff">
	  </td>
	</tr>
  </tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="a265ebb9-ab9c-43e8-9009-54d6151b1600" data-mc-module-version="2019-10-22">
  <tbody>
	<tr>
	  <td style="padding:50px 30px 10px 30px; line-height:22px; text-align:inherit; background-color:#303030;" height="100%" valign="top" bgcolor="#303030" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 18px"><strong>Here’s what you can do next:</strong></span></div>
<div style="font-family: inherit; text-align: center"><br></div>
<div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 18px">1. Go login at <a href="https://alchemy.nitt.edu/login">Alchemy</a></span></div>
<div style="font-family: inherit; text-align: center"><br></div>
<div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 18px">2. Enter your details</span></div>
<div style="font-family: inherit; text-align: center"><br></div>
<div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 18px">3. Register for events and workshops!</span></div>
<div style="font-family: inherit; text-align: center"><br></div>
<div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 18px">Need support? Our support team is always</span></div>
<div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 18px">ready to help!&nbsp;</span></div><div></div></div></td>
	</tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="d050540f-4672-4f31-80d9-b395dc08abe1.1">
	<tbody>
	  <tr>
		<td align="center" bgcolor="#303030" class="outer-td" style="padding:0px 0px 0px 0px;">
		  <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
			<tbody>
			  <tr>
			  <td align="center" bgcolor="#ecc82c" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
				<a href="mailto:nitt.chea@gmail.com" style="background-color:#ecc82c; border:1px solid #ecc82c; border-color:#ecc82c; border-radius:0px; border-width:1px; color:#000000; display:inline-block; font-size:14px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:12px 40px 12px 40px; text-align:center; text-decoration:none; border-style:solid; font-family:inherit; margin-bottom: 10px;">Contact Support</a>
			  </td>
			  </tr>
			</tbody>
		  </table>
		</td>
	  </tr>
	</tbody>
  </table>
	</center>
  

</body></html>`;
};

exports.getForgotPasswordEmail = (app_url, token) => {
	return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"><head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
<style type="text/css">
  body {width: 600px;margin: 0 auto;}
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
    <style type="text/css">
  body, p, div {
    font-family: inherit;
    font-size: 14px;
  }
  body {
    color: #000000;
  }
  body a {
    color: #1188E6;
    text-decoration: none;
  }
  p { margin: 0; padding: 0; }
  table.wrapper {
    width:100% !important;
    table-layout: fixed;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  img.max-width {
    max-width: 100% !important;
  }
  .column.of-2 {
    width: 50%;
  }
  .column.of-3 {
    width: 33.333%;
  }
  .column.of-4 {
    width: 25%;
  }
  @media screen and (max-width:480px) {
    .preheader .rightColumnContent,
    .footer .rightColumnContent {
      text-align: left !important;
    }
    .preheader .rightColumnContent div,
    .preheader .rightColumnContent span,
    .footer .rightColumnContent div,
    .footer .rightColumnContent span {
      text-align: left !important;
    }
    .preheader .rightColumnContent,
    .preheader .leftColumnContent {
      font-size: 80% !important;
      padding: 5px 0;
    }
    table.wrapper-mobile {
      width: 100% !important;
      table-layout: fixed;
    }
    img.max-width {
      height: auto !important;
      max-width: 100% !important;
    }
    a.bulletproof-button {
      display: block !important;
      width: auto !important;
      font-size: 80%;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .columns {
      width: 100% !important;
    }
    .column {
      display: block !important;
      width: 100% !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }
</style>
    <!--user entered Head Start--><link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet"><style>
body {font-family: 'Muli', sans-serif;}
</style><!--End Head user entered-->
  </head>
  <body>
    <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#FFFFFF;">
      <div class="webkit">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
          <tbody><tr>
            <td valign="top" bgcolor="#FFFFFF" width="100%">
              <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                <tbody><tr>
                  <td width="100%">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tbody><tr>
                        <td>
                          <!--[if mso]>
  <center>
  <table><tr><td width="600">
<![endif]-->
                                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                    <tbody><tr>
                                      <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
  <tbody><tr>
    <td role="module-content">
      <p></p>
    </td>
  </tr>
</tbody></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:30px 20px 30px 20px;" bgcolor="#f6f6f6">
  <tbody>
    <tr role="module-content">
      <td height="100%" valign="top">
        <table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="331cde94-eb45-45dc-8852-b7dbeb9101d7">
</table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="d8508015-a2cb-488c-9877-d46adf313282">
  <tbody>
    <tr>
      <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
        <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" width="185" alt="" data-proportionally-constrained="true" data-responsive="false" src="https://i.imgur.com/xDQ25iF.png" height="67">
      </td>
    </tr>
  </tbody>
</table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="27716fe9-ee64-4a64-94f9-a4f28bc172a0">
  <tbody>
    <tr>
      <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
      </td>
    </tr>
  </tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="948e3f3f-5214-4721-a90e-625a47b1c957" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:50px 30px 18px 30px; line-height:36px; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 43px">Forgot your password?&nbsp;</span></div><div></div></div></td>
    </tr>
  </tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="a10dcb57-ad22-4f4d-b765-1d427dfddb4e" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:18px 30px 18px 30px; line-height:22px; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 18px">No worries!, Just click the button below and reset your password. Also note that this password reset link expires in 15 mins.</span><span style="font-size: 18px">.</span></div>
<div style="font-family: inherit; text-align: center"><span style="color: #ecc82c; font-size: 18px"><strong>Thank you!&nbsp;</strong></span></div><div></div></div></td>
    </tr>
  </tbody>
</table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="7770fdab-634a-4f62-a277-1c66b2646d8d">
  <tbody>
    <tr>
      <td style="padding:0px 0px 20px 0px;" role="module-content" bgcolor="#ffffff">
      </td>
    </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="d050540f-4672-4f31-80d9-b395dc08abe1">
    <tbody>
      <tr>
        <td align="center" bgcolor="#ffffff" class="outer-td" style="padding:0px 0px 0px 0px;">
          <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
            <tbody>
              <tr>
              <td align="center" bgcolor="#ecc82c" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                <a href="${app_url}/changePass?id=${token}" style="background-color:#ecc82c; border:1px solid #ecc82c; border-color:#ecc82c; border-radius:0px; border-width:1px; color:#000000; display:inline-block; font-size:14px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:12px 40px 12px 40px; text-align:center; text-decoration:none; border-style:solid; font-family:inherit;" target="_blank">Reset your password</a>
              </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="7770fdab-634a-4f62-a277-1c66b2646d8d.1">
  <tbody>
    <tr>
      <td style="padding:0px 0px 50px 0px;" role="module-content" bgcolor="#ffffff">
      </td>
    </tr>
  </tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="a265ebb9-ab9c-43e8-9009-54d6151b1600" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:50px 30px 10px 30px; line-height:22px; text-align:inherit; background-color:#303030;" height="100%" valign="top" bgcolor="#303030" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 18px"><strong>Here’s what you can do next:</strong></span></div>
<div style="font-family: inherit; text-align: center"><br></div>
<div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 18px">1. Go login at <a href="https://alchemy.nitt.edu/login">Alchemy</a> with your new password</span></div>
<div style="font-family: inherit; text-align: center"><br></div>
<div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 18px">2. Fill in your details if you haven't yet!</span></div>
<div style="font-family: inherit; text-align: center"><br></div>
<div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 18px">3. Register for events and workshops!</span></div>
<div style="font-family: inherit; text-align: center"><br></div>
<div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 18px">Need further support? Our support team is always</span></div>
<div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 18px">ready to help!&nbsp;</span></div><div></div></div></td>
    </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="d050540f-4672-4f31-80d9-b395dc08abe1.1">
    <tbody>
      <tr>
        <td align="center" bgcolor="#303030" class="outer-td" style="padding:0px 0px 0px 0px;">
          <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
            <tbody>
              <tr>
              <td align="center" bgcolor="#ecc82c" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                <a href="mailto:nitt.chea@gmail.com" style="background-color:#ecc82c; border:1px solid #ecc82c; border-color:#ecc82c; border-radius:0px; border-width:1px; color:#000000; display:inline-block; font-size:14px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:12px 40px 12px 40px; text-align:center; text-decoration:none; border-style:solid; font-family:inherit; margin-bottom: 10px;">Contact Support</a>
              </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
    </center>
  

</body></html>`;
};

exports.verifiedThanks = () => {
	return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"><head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
<style type="text/css">
  body {width: 600px;margin: 0 auto;}
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
    <style type="text/css">
  body, p, div {
    font-family: inherit;
    font-size: 14px;
  }
  body {
    color: #000000;
  }
  body a {
    color: #1188E6;
    text-decoration: none;
  }
  p { margin: 0; padding: 0; }
  table.wrapper {
    width:100% !important;
    table-layout: fixed;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  img.max-width {
    max-width: 100% !important;
  }
  .column.of-2 {
    width: 50%;
  }
  .column.of-3 {
    width: 33.333%;
  }
  .column.of-4 {
    width: 25%;
  }
  @media screen and (max-width:480px) {
    .preheader .rightColumnContent,
    .footer .rightColumnContent {
      text-align: left !important;
    }
    .preheader .rightColumnContent div,
    .preheader .rightColumnContent span,
    .footer .rightColumnContent div,
    .footer .rightColumnContent span {
      text-align: left !important;
    }
    .preheader .rightColumnContent,
    .preheader .leftColumnContent {
      font-size: 80% !important;
      padding: 5px 0;
    }
    table.wrapper-mobile {
      width: 100% !important;
      table-layout: fixed;
    }
    img.max-width {
      height: auto !important;
      max-width: 100% !important;
    }
    a.bulletproof-button {
      display: block !important;
      width: auto !important;
      font-size: 80%;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .columns {
      width: 100% !important;
    }
    .column {
      display: block !important;
      width: 100% !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }
</style>
    <!--user entered Head Start--><link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet"><style>
body {font-family: 'Muli', sans-serif;}
</style><!--End Head user entered-->
  </head>
  <body>
    <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#FFFFFF;">
      <div class="webkit">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
          <tbody><tr>
            <td valign="top" bgcolor="#FFFFFF" width="100%">
              <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                <tbody><tr>
                  <td width="100%">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tbody><tr>
                        <td>
                          <!--[if mso]>
  <center>
  <table><tr><td width="600">
<![endif]-->
                                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                    <tbody><tr>
                                      <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
  <tbody><tr>
    <td role="module-content">
      <p></p>
    </td>
  </tr>
</tbody></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:30px 20px 30px 20px;" bgcolor="#f6f6f6">
  <tbody>
    <tr role="module-content">
      <td height="100%" valign="top">
        <table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="331cde94-eb45-45dc-8852-b7dbeb9101d7">
</table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="d8508015-a2cb-488c-9877-d46adf313282">
  <tbody>
    <tr>
      <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
        <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" width="185" alt="" data-proportionally-constrained="true" data-responsive="false" src="https://i.imgur.com/xDQ25iF.png" height="67">
      </td>
    </tr>
  </tbody>
</table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="27716fe9-ee64-4a64-94f9-a4f28bc172a0">
  <tbody>
    <tr>
      <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
      </td>
    </tr>
  </tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="948e3f3f-5214-4721-a90e-625a47b1c957" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:50px 30px 18px 30px; line-height:36px; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 43px">Welcome from Alchemy'21&nbsp;</span></div><div></div></div></td>
    </tr>
  </tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="a10dcb57-ad22-4f4d-b765-1d427dfddb4e" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:18px 30px 18px 30px; line-height:22px; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 18px"> Your Alchemy account has been verified. Please visit <a href="https://alchemy.nitt.edu">https://alchemy.nitt.edu</a> to register for events.</span><span style="font-size: 18px"></span></div>
<div style="font-family: inherit; text-align: center"><span style="color: #ecc82c; font-size: 18px"><strong>Thank you!&nbsp;</strong></span></div><div></div></div></td>
    </tr>
  </tbody>
</table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="7770fdab-634a-4f62-a277-1c66b2646d8d">
  <tbody>
    <tr>
      <td style="padding:0px 0px 20px 0px;" role="module-content" bgcolor="#ffffff">
      </td>
    </tr>
  </tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="a265ebb9-ab9c-43e8-9009-54d6151b1600" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:5x 30px 10px 30px; line-height:22px; text-align:inherit; background-color:#303030;" height="100%" valign="top" bgcolor="#303030" role="module-content"><div><div style="font-family: inherit; text-align: center"></div>
<div style="font-family: inherit; text-align: center"><br></div>
<div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 18px">Need help? Our support team is always</span></div>
<div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 18px">ready to help!&nbsp;</span></div><div></div></div></td>
    </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="d050540f-4672-4f31-80d9-b395dc08abe1.1">
    <tbody>
      <tr>
        <td align="center" bgcolor="#303030" class="outer-td" style="padding:0px 0px 15px 0px;">
          <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center; margin-top: 10px;">
            <tbody>
              <tr>
              <td align="center" bgcolor="#ecc82c" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                <a href="mailto:nitt.chea@gmail.com" style="background-color:#ecc82c; border:1px solid #ecc82c; border-color:#ecc82c; border-radius:0px; border-width:1px; color:#000000; display:inline-block; font-size:14px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:12px 40px 12px 40px; text-align:center; text-decoration:none; border-style:solid; font-family:inherit; margin-bottom: 10px;">Contact Support</a>
              </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
    </center>
  

</body></html>`;
};
