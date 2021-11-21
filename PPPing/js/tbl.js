$(function() {
    load();
    $('#title').on('keydown', function(e) {
            if (e.keyCode === 13) {
                //get data 
                if ($(this).val() === "") {
                    alert('Please input what you like ^-^');
                } else {
                    var local = getData();
                    //get new data to local
                    local.push({ "content": $(this).val(), "done": false });
                    // store in localStorage
                    saveData(local);
                    // render the data
                    load();
                    $(this).val("");
                }

            }

        })
        //delete liked item
    $('ol,ul').on('click', 'a', function() {
        //get->change->save->load
        var data = getData();
        //split(since,number)= delete
        data.splice($(this).attr('id'), 1);
        //save to database
        saveData(data);
        //render again
        load();
    });
    //group the owned and liked item
    $('ol,ul').on('click', 'input', function() {
        //change data done
        var index = $(this).siblings('a').attr('id');
        var data = getData();
        data[index].done = $(this).prop('checked');
        saveData(data);
        load();


    });
    //======================
    // get local data
    function getData() {
        var data = localStorage.getItem("tbl");
        if (data == null) {
            return [];
        } else {
            return JSON.parse(data);
        }
    }
    // store new data
    function saveData(data) {
        localStorage.setItem("tbl", JSON.stringify(data));
    }
    // load and render data
    function load() {
        $('ol,ul').empty();
        var data = getData();
        var todocount = 0;
        var donecount = 0;
        $.each(data, function(i, d) {
            // render to ol
            if (d.done) {
                donecount++;
                $('ul').prepend("<li><input type ='checkbox' checked> <p>" + d.content + "</p><a href='javascript:;' id=" + i + "></li>");
            } else {
                todocount++;
                $('ol').prepend("<li><input type ='checkbox'> <p>" + d.content + "</p><a href='javascript:;' id=" + i + "></li>");
            }

        })
        $('#todocount').html(todocount);
        $('#donecount').html(donecount);
    }

})