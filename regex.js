// №1 Данн текст.
// pdf_content
// pdf_content2

// Пути до этих файлов имеют вид:
// D:\kaka4\fl-317332800020882-20210507112001.pdf
// D:\kaka4\ul-1076167006794-20210507122728.pdf

// Вид в pdf формате:
// https://prnt.sc/12o5go7
// https://prnt.sc/12o5ieb

// Это документы ГОСТ, поэтому поля имеют строгое расположение.


// Необходимо получить в консоле из него регион вида: "Владимирская область" ( соблюдая регистр )
// Данные необходимо получать из мест, указанных на скриншоте

const pdf_content = "ВЫПИСКА из Единого государственного реестра индивидуальных предпринимателей 07.05.2021 No ИЭ9965-21- 95255734 дата формирования выписки    Настоящая выписка содержит сведения об индивидуальном предпринимателе БОЛДЫРЕВ АЛЕКСЕЙ АНДРЕЕВИЧ фамилия, имя и отчество (при наличии) ОГРНИП 3 1 7 3 3 2 8 0 0 0 2 0 8 8 2  включенные в Единый государственный реестр индивидуальных предпринимателей по состоянию на « 07 » мая 20 21 г.  число  месяц прописью  год   No п/п Наименование показателя Значение показателя 1 2 3 Фамилия, имя, отчество (при наличии) индивидуального предпринимателя 1 Фамилия Имя Отчество БОЛДЫРЕВ АЛЕКСЕЙ АНДРЕЕВИЧ 2 ГРН и дата внесения в ЕГРИП записи, содержащей указанные сведения 317332800020882 11.04.2017 3 Пол мужской Сведения о гражданстве 4 Гражданство гражданин Российской Федерации 5 ГРН и дата внесения в ЕГРИП записи, содержащей указанные сведения 317332800020882 11.04.2017 Место жительства (пребывания) в Российской Федерации 6 Место жительства (пребывания) в Российской Федерации ВЛАДИМИРСКАЯ ОБЛАСТЬ РАЙОН ВЯЗНИКОВСКИЙ ГОРОД ВЯЗНИКИ 7 ГРН и дата внесения в ЕГРИП записи, содержащей указанные сведения 317332800020882 11.04.2017 Сведения о регистрации индивидуального предпринимателя 8 ОГРНИП 317332800020882 9 Дата регистрации 11.04.2017 Сведения о регистрирующем органе по месту жительства индивидуального предпринимателя 10 Наименование регистрирующего органа Инспекция Федеральной налоговой службы по Октябрьскому району г. Владимира 11 Адрес регистрирующего органа 600005, г. Владимир, ул. 1-ый Коллективный проезд, д. 2А 12 ГРН и дата внесения в ЕГРИП записи, содержащей указанные сведения 317332800020882 11.04.2017 Страница 1 из  Выписка из ЕГРИП 07.05.2021 11:20 ОГРНИП 317332800020882 4 Сведения об учете в налоговом органе 13 Идентификационный номер налогоплательщика (ИНН) 330302155696 14 Дата постановки на учет 11.04.2017 15 Наименование налогового органа Межрайонная инспекция Федеральной налоговой службы No 2 по Владимирской области 16 ГРН и дата внесения в ЕГРИП записи, содержащей указанные сведения 417332800137663 11.04.2017 Сведения о регистрации в качестве страхователя в территориальном органе Пенсионного фонда Российской Федерации 17 Регистрационный номер 043460015489 18 Дата регистрации 13.04.2017 19 Наименование территориального органа Пенсионного фонда Государственное Учреждение - Управление Пенсионного фонда Российской Федерации в округе Вязники Владимирской области 20 ГРН и дата внесения в ЕГРИП записи, содержащей указанные сведения 417332800142517 14.04.2017 Сведения о регистрации в качестве страхователя в исполнительном органе Фонда социального страхования Российской Федерации 21 Регистрационный номер 330100250433013 22 Дата регистрации 04.04.2018 23 ГРН и дата внесения в ЕГРИП записи, содержащей указанные сведения 418332800146388 05.04.2018 Сведения о видах экономической деятельности по Общероссийскому классификатору видов экономической деятельности (ОКВЭД ОК 029-2014 КДЕС. Ред. 2) Сведения об основном виде деятельности 24 Код и наименование вида деятельности 41.20 Строительство жилых и нежилых зданий 25 ГРН и дата внесения в ЕГРИП записи, содержащей указанные сведения 317332800020882 11.04.2017 Сведения о дополнительных видах деятельности (ОКВЭД ОК 029-2014 (КДЕС Ред. 2)) 26 Код и наименование вида деятельности 68.10 Покупка и продажа собственного недвижимого имущества 27 ГРН и дата внесения в ЕГРИП записи, содержащей указанные сведения 317332800020882 11.04.2017 Сведения о записях, внесенных в ЕГРИП 1 28 ГРН и дата внесения записи в ЕГРИП 317332800020882 11.04.2017 29 Причина внесения записи в ЕГРИП Государственная регистрация физического лица в качестве индивидуального предпринимателя 30 Наименование регистрирующего органа, которым запись внесена в ЕГРИП Инспекция Федеральной налоговой службы по Октябрьскому району г. Владимира Страница 2 из  Выписка из ЕГРИП 07.05.2021 11:20 ОГРНИП 317332800020882 4 Сведения о документах, представленных при внесении записи в ЕГРИП 31 Наименование документа Р21001 ЗАЯВЛЕНИЕ О РЕГИСТРАЦИИ ФЛ В КАЧЕСТВЕ ИП 32 Дата документа 06.04.2017 33 Наименование документа ДОКУМЕНТ, УДОСТОВЕРЯЮЩИЙ ЛИЧНОСТЬ ГРАЖДАНИНА РФ 34 Наименование документа ДОКУМЕНТ ОБ ОПЛАТЕ ГОСУДАРСТВЕННОЙ ПОШЛИНЫ 35 Номер документа 1262 36 Дата документа 06.04.2017 2 37 ГРН и дата внесения записи в ЕГРИП 417332800137663 11.04.2017 38 Причина внесения записи в ЕГРИП Представление сведений об учете в налоговом органе 39 Наименование регистрирующего органа, которым запись внесена в ЕГРИП Инспекция Федеральной налоговой службы по Октябрьскому району г. Владимира 3 40 ГРН и дата внесения записи в ЕГРИП 417332800142517 14.04.2017 41 Причина внесения записи в ЕГРИП Представление сведений о регистрации в качестве страхователя в территориальном органе Пенсионного фонда Российской Федерации 42 Наименование регистрирующего органа, которым запись внесена в ЕГРИП Инспекция Федеральной налоговой службы по Октябрьскому району г. Владимира 4 43 ГРН и дата внесения записи в ЕГРИП 418332800146388 05.04.2018 44 Причина внесения записи в ЕГРИП Представление сведений о регистрации в качестве страхователя в исполнительном органе Фонда социального страхования Российской Федерации Страница 3 из  Выписка из ЕГРИП 07.05.2021 11:20 ОГРНИП 317332800020882 4 Сертификат: 64148231595612336249930080530882194349 Владелец: МИ ФНС России по ЦОД Действителен: с 21.01.2021 до 21.01.2022 ДОКУМЕНТ ПОДПИСАН УСИЛЕННОЙ КВАЛИФИЦИРОВАННОЙ ЭЛЕКТРОННОЙ ПОДПИСЬЮ 45 Наименование регистрирующего органа, которым запись внесена в ЕГРИП Инспекция Федеральной налоговой службы по Октябрьскому району г. Владимира   Выписка сформирована с использованием сервиса «Предоставление сведений из ЕГРЮЛ/ЕГРИП», размещенного на официальном сайте ФНС России в сети Интернет по адресу: https://egrul.nalog.ru                Страница 4 из  Выписка из ЕГРИП 07.05.2021 11:20 ОГРНИП 317332800020882 4"

const pdf_content2 = "ВЫПИСКА из Единого государственного реестра юридических лиц 07.05.2021 No ЮЭ9965-21- 140860264 дата формирования выписки   Настоящая выписка содержит сведения о юридическом лице ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"СТРОИТЕЛЬНО- ПРОИЗВОДСТВЕННАЯ ФИРМА  \"РОСТСТРОЙКОНТРАКТ\" полное наименование юридического лица ОГРН 1 0 7 6 1 6 7 0 0 6 7 9 4  включенные в Единый государственный реестр юридических лиц по состоянию на « 07 » мая 20 21 г.  число  месяц прописью  год   No п/п Наименование показателя Значение показателя 1 2 3 Наименование 1 Полное наименование на русском языке ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"СТРОИТЕЛЬНО-ПРОИЗВОДСТВЕННАЯ ФИРМА  \"РОСТСТРОЙКОНТРАКТ\" 2 ГРН и дата внесения в ЕГРЮЛ записи, содержащей указанные сведения 2096195185183 20.10.2009 3 Сокращенное наименование на русском языке ООО  \"СПФ \"РСК\" 4 ГРН и дата внесения в ЕГРЮЛ записи, содержащей указанные сведения 2096195185183 20.10.2009 Место нахождения и адрес юридического лица 5 Место нахождения юридического лица РОСТОВСКАЯ ОБЛАСТЬ ГОРОД РОСТОВ-НА-ДОНУ 6 ГРН и дата внесения в ЕГРЮЛ записи, содержащей указанные сведения 2206100810562 23.10.2020 7 Адрес юридического лица 344029 РОСТОВСКАЯ ОБЛАСТЬ ГОРОД РОСТОВ-НА-ДОНУ ПРОСПЕКТ СЕЛЬМАШ ДОМ 90А/17Б ЛИТЕР Б,В ПОМЕЩЕНИЕ 16 8 ГРН и дата внесения в ЕГРЮЛ записи, содержащей указанные сведения 2206100810562 23.10.2020 Страница 1 из  Выписка из ЕГРЮЛ 07.05.2021 12:27 ОГРН 1076167006794 21 Сведения о регистрации 9 Способ образования Создание юридического лица 10 ОГРН 1076167006794 11 Дата регистрации 14.12.2007 12 ГРН и дата внесения в ЕГРЮЛ записи, содержащей указанные сведения 1076167006794 14.12.2007 Сведения о регистрирующем органе по месту нахождения юридического лица 13 Наименование регистрирующего органа Межрайонная инспекция Федеральной налоговой службы No 26 по Ростовской области 14 Адрес регистрирующего органа ,344019,,, Ростов-на-Дону г,, Мясникова ул, д 52/32,, 15 ГРН и дата внесения в ЕГРЮЛ записи, содержащей указанные сведения 2146195127450 26.07.2014 Сведения о лице, имеющем право без доверенности действовать от имени юридического лица 16 ГРН и дата внесения в ЕГРЮЛ сведений о данном лице 6166196832796 28.12.2016 17 Фамилия Имя Отчество ФИЛИМОНОВ СЕРГЕЙ ВАСИЛЬЕВИЧ 18 ИНН 616700856665 19 ГРН и дата внесения в ЕГРЮЛ записи, содержащей указанные сведения 6166196832796 28.12.2016 20 Должность ГЕНЕРАЛЬНЫЙ ДИРЕКТОР 21 ГРН и дата внесения в ЕГРЮЛ записи, содержащей указанные сведения 6166196832796 28.12.2016 Сведения об уставном капитале / складочном капитале / уставном фонде / паевом фонде 22 Вид УСТАВНЫЙ КАПИТАЛ 23 Размер (в рублях) 20000 24 ГРН и дата внесения в ЕГРЮЛ записи, содержащей указанные сведения 2106195043227 08.04.2010 Сведения об участниках / учредителях юридического лица 25 ГРН и дата внесения в ЕГРЮЛ сведений о данном лице 2176196041646 09.01.2017 26 Фамилия Имя Отчество ФИЛИМОНОВ СЕРГЕЙ ВАСИЛЬЕВИЧ 27 ИНН 616700856665 28 ГРН и дата внесения в ЕГРЮЛ записи, содержащей указанные сведения 2176196041646 09.01.2017 Страница 2 из  Выписка из ЕГРЮЛ 07.05.2021 12:27 ОГРН 1076167006794 21 29 Номинальная стоимость доли (в рублях) 20000 30 Размер доли (в процентах) 100 31 ГРН и дата внесения в ЕГРЮЛ записи, содержащей указанные сведения 2176196041646 09.01.2017 Сведения об учете в налоговом органе 32 ИНН юридического лица 6167096068 33 КПП юридического лица 616601001 34 Дата постановки на учет в налоговом органе 23.10.2020 35 Сведения о налоговом органе, в котором юридическое лицо состоит (для юридических лиц, прекративших деятельность - состояло) на учете Межрайонная инспекция Федеральной налоговой службы No 23 по Ростовской области 36 ГРН и дата внесения в ЕГРЮЛ записи, содержащей указанные сведения 2206100810617 23.10.2020 Сведения о регистрации в качестве страхователя в территориальном органе Пенсионного фонда Российской Федерации 37 Регистрационный номер 071055058720 38 Дата регистрации в качестве страхователя 26.10.2020 39 Наименование территориального органа Пенсионного фонда Российской Федерации Управление Пенсионного Фонда РФ в Первомайском районе г.Ростова-на-Дону 40 ГРН и дата внесения в ЕГРЮЛ записи, содержащей указанные сведения 2206100817965 27.10.2020 Сведения о регистрации в качестве страхователя в исполнительном органе Фонда социального страхования Российской Федерации 41 Регистрационный номер 610370804961031 42 Дата регистрации в качестве страхователя 29.12.2007 43 Наименование исполнительного органа Фонда социального страхования Российской Федерации Филиал No3 Государственного учреждения - Ростовского регионального отделения Фонда социального страхования Российской Федерации 44 ГРН и дата внесения в ЕГРЮЛ записи, содержащей указанные сведения 2086167011104 28.01.2008 Сведения о видах экономической деятельности по Общероссийскому классификатору видов экономической деятельности Сведения об основном виде деятельности (ОКВЭД ОК 029-2014 (КДЕС Ред. 2)) 45 Код и наименование вида деятельности 41.2   "

function getAdress(pdf_content) {
    const individEnterp = /индивидуальных предпринимателей/;
    const resIE = individEnterp.test(pdf_content);

    if (resIE) {
        const regexpIE = /6 Место жительства \(пребывания\) в Российской Федерации (.*) 7/gm
        const resultIE = regexpIE.exec(pdf_content);
        return resultIE[1];
    } else {
        const regexpOOO = /7 Адрес юридического лица (.*) 8/gm;
        const resultOOO = regexpOOO.exec(pdf_content);
        const changedResultOOO = resultOOO[1].replace(/\d{6}/, "");
        return changedResultOOO;
    }
}
console.log(getAdress(pdf_content));