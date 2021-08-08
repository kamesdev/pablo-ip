// Create ips row in LS if there is not already
if (!localStorage.getItem('ips')) {
  localStorage.setItem('ips', JSON.stringify([]))
}

fetch('https://api.db-ip.com/v2/free/self')

  .then(res => res.json())
  
    .then(

      data => {
        // current ip
        const currentIp = data.ipAddress

        const ips = JSON.parse(localStorage.getItem('ips'))

        const respond = document.querySelector('.respond')
        const ipElement = document.querySelector('.ip')

        // check if ip is already in LS
        if (ips.includes(currentIp)) {

          respond.classList.add('error')
          respond.textContent = '🚫 NIE :('

        } else {

          respond.classList.add('success')
          respond.textContent = '✅ TAK :)'
          ips.push(currentIp)

        }

        ipElement.textContent = currentIp

        localStorage.setItem('ips', JSON.stringify(ips))
      }
      
      )


