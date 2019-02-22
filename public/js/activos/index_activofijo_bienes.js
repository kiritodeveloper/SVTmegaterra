$(document).ready(function(){
	$('#datatable_listadebinesactivosdijos').DataTable();

	$(".openingvisualisar_codeqrmodalviewemergent").click(function(){
		if((($(this).attr('id')) != "") && ((($(this).attr('id')) !=""))){
        	var logo = document.getElementById('imgcodeactivofijoframe');
        	$("#imgcodeactivofijoframe").empty();
			$('#showimage_codeqractivofijobien_windowsemergent').modal('toggle');
			$('#showimage_codeqractivofijobien_windowsemergent').modal('show');
			logo.src = '/qrsactivos/'+$(this).attr('id')+'';
			$('#dowloadcodeqr_activobienfijo_materialise').attr('href', '/qrsactivos/'+$(this).attr('id')+'');
			return false;
		}
    });
});