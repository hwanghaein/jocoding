var now = new Date();
        var start = new Date('2022-8-20');

        var timeDiff = now.getTime() - start.getTime();
        var day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
        $('#love').text(day + '일째');

        var valentine = new Date('2023-02-14');
        var timeDiff2 = valentine.getTime() - now.getTime();
        var day2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24) + 1);
        $('#valentine').text(day2 + '일 남음');

        var thousand = new Date(start.getTime() + 999 * (1000 * 60 * 60 * 24));
        var thousandDate = thousand.getFullYear() + '.' + (thousand.getMonth()+1) + '.' + thousand.getDate();
        $('#thousand-date').text(thousandDate);

        // thousand, now, getTime()
        var timeDiff3 = thousand.getTime() - now.getTime();
        var day3 = Math.floor(timeDiff3 / (365 * 60 * 60 * 24) + 1);
        $('#thousand').text(day3 + '일 남음');