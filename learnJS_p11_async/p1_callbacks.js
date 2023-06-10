// асихронное програмирование:
// В функции, которые выполняют какие-либо асинхронные операции, передаётся аргумент callback — функция, которая будет вызвана по завершению асинхронного действия.

function loadScript(src, callback) {
  let script = document.createElement('script'); 
  script.src = src;
  script.onload = () => callback(script); // событие, если скрипт загрузился
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
 console.log(`Здорово, скрипт ${script.src} загрузился`);
 console.log( _ ); // функция, объявленная в загруженном скрипте
});



{//загружаем скрипты один за другим 
  {//два
    loadScript('/my/script.js', function(script) {

      alert(`Здорово, скрипт ${script.src} загрузился, загрузим ещё один`);
    
      loadScript('/my/script2.js', function(script) {
        alert(`Здорово, второй скрипт загрузился`);
      });
    
    });
  }

  {//больше
    loadScript('/my/script.js', function(script) {

      loadScript('/my/script2.js', function(script) {
    
        loadScript('/my/script3.js', function(script) {
          // ...и так далее, пока все скрипты не будут загружены
        });
    
      })
    
    });
  }
  //растет вложенность - каждое новое действие мы вынуждены вызывать внутри колбэка
}


// Обработчики onload/onerror отслеживают только сам процесс загрузки.

// Ошибки обработки и выполнения загруженного скрипта ими не отслеживаются. Чтобы «поймать» ошибки в скрипте, нужно воспользоваться глобальным обработчиком window.onerror.



//Перехват ошибок 
{
  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));
  
    document.head.append(script);
  }

  loadScript('/my/script.js', function(error, script) { //подход «колбэк с первым аргументом-ошибкой» 
    if (error) {
      // обрабатываем ошибку
    } else {
      // скрипт успешно загружен
    }
  });
}



//Пирамида шизофрении
{
  loadScript('1.js', function(error, script) {

    if (error) {
      handleError(error);
    } else {
      // ...
      loadScript('2.js', function(error, script) {
        if (error) {
          handleError(error);
        } else {
          // ...
          loadScript('3.js', function(error, script) {
            if (error) {
              handleError(error);
            } else {
              // ...и так далее, пока все скрипты не будут загружены (*)
            }
          });
  
        }
      })
    }
  });
}



//решение 
{
  loadScript('1.js', step1);

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', step2);
  }
}

function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('3.js', step3);
  }
}

function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...и так далее, пока все скрипты не будут загружены (*)
  }
};
}

// разница между синхронным и асинхронным кодом заключается в том, что синхронный код выполняется последовательно и блокирует выполнение других задач, а асинхронный код позволяет выполнять несколько задач одновременно, не блокируя выполнение других операций.

// Функции обратного вызова - это функции, которые передаются в качестве аргументов в другие функции, чтобы вызываться после завершения определенной задачи. Это позволяет выполнить задачу асинхронно, не блокируя выполнение других задач.

// Промисы - это объекты, которые представляют результат асинхронной операции и позволяют управлять ее состоянием (выполнена успешно, выполнена с ошибкой или находится в процессе выполнения).
