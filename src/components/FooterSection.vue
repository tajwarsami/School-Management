<template>
  <footer class="footer">
   
    <div class="footer-left">
      <img :src="logo" alt="School Logo" class="logo" />
    </div>

    
    <div class="footer-center">
    
      <div class="footer-section">
        <h4>External Links</h4>
        <ul>
          <li v-for="link in externalLinks" :key="link.slug">
            <router-link :to="`/content/${link.slug}`">{{ link.title }}</router-link>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Results</h4>
        <ul>
          <li v-for="link in resultLinks" :key="link.slug">
            <router-link :to="`/content/${link.slug}`">{{ link.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-right">
      <p class="school-name"><strong>Cantonment English School & College</strong></p>
      <p>Bayezid Bostami Rd, Chattogram - 4210</p>
      <p>Telephone: Please follow contact page</p>
      <p>Email: <a href="mailto:cescctg05@gmail.com">cescctg05@gmail.com</a></p>
    </div>
  </footer>
</template>

<script setup>
import logo from '@/assets/images/logo.png'
import { contents } from '@/data/contents'

const externalLinks = [
  { slug: 'ebook', title: contents['ebook'].title },
  { slug: 'eff-hsc', title: contents['eff-hsc'].title },
  { slug: 'iif-jsc-esif', title: contents['iif-jsc-esif'].title },
  { slug: 'nctb', title: contents['nctb'].title },
  { slug: 'public-library', title: contents['public-library'].title },
  { slug: 'privacy-policy', title: contents['privacy-policy'].title }
]

const resultLinks = [
  { slug: 'result-list', title: contents['result-list'].title },
  { slug: 'result-search', title: contents['result-search'].title },
  { slug: 'ssc-result', title: contents['ssc-result'].title },
  { slug: 'jsc-result', title: contents['jsc-result'].title }
]
</script>

<style scoped>
.footer {
  background-color: #0a728a;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 40px;
  flex-wrap: wrap;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
  gap: 20px;
}

.footer-left .logo {
  height: 60px;
  width: auto;
}

.footer-center {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.footer-section h4 {
  margin-bottom: 10px;
  font-size: 16px;
  text-decoration: underline;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 5px;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-section ul li a:hover {
  text-decoration: underline;
}

.footer-right {
  text-align: right;
}

.footer-right a {
  color: #fff;
  text-decoration: none;
}

.footer-right a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-center {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .footer-right {
    text-align: center;
  }
}
</style>
