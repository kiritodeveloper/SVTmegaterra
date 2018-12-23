@if(session('status'))
    <script>
        $(function(){
            new PNotify({
                title: 'Notification',
                text: '{{session('status')}}',
                type: 'success',
                styling: 'bootstrap3',
                delay: 3
            })
        });
    </script>
@endif

{{--You can add more custom ones here--}}