document.addEventListener('DOMContentLoaded', function() {    // ========================    // Database Kode Pos    // ========================    const postalCodeData = {        // Jakarta        "gambir": "10110",        "sawah besar": "10710",        "kemayoran": "10620",        "senen": "10410",        "cempaka putih": "10510",        "menteng": "10310",        "tanah abang": "10220",        "johar baru": "10560",        "tanjung priok": "14310",        "koja": "14220",        "cilincing": "14120",        "pademangan": "14420",        "kelapa gading": "14240",        "penjaringan": "14440",        "cengkareng": "11730",        "grogol petamburan": "11450",        "taman sari": "11120",        "tambora": "11220",        "kebon jeruk": "11530",        "kalideres": "11840",        "palmerah": "11480",        "kembangan": "11610",        "tebet": "12810",        "setiabudi": "12910",        "mampang prapatan": "12790",        "pancoran": "12780",        "kebayoran baru": "12110",        "kebayoran lama": "12220",        "cilandak": "12430",        "jagakarsa": "12620",        "pesanggrahan": "12320",        "pasar minggu": "12520",        "matraman": "13120",        "pulo gadung": "13220",        "jatinegara": "13310",        "duren sawit": "13440",        "kramat jati": "13510",        "makasar": "13570",        "pasar rebo": "13710",        "cipayung": "13840",        "ciracas": "13730",        "cakung": "13910",        // Bandung        "sukasari": "40151",        "coblong": "40132",        "babakan ciparay": "40223",        "bojongloa kaler": "40233",        "andir": "40184",        "cicendo": "40171",        "sukajadi": "40162",        "cidadap": "40142",        "bandung wetan": "40115",        "astana anyar": "40241",        "regol": "40251",        "batununggal": "40275",        "lengkong": "40261",        "cibeunying kidul": "40122",        "bandung kulon": "40212",        "kiaracondong": "40283",        "bojongloa kidul": "40238",        "cibeunying kaler": "40191",        "sumur bandung": "40111",        "antapani": "40291",        "bandung kidul": "40266",        "buahbatu": "40265",        "rancasari": "40292",        "arcamanik": "40293",        "cibiru": "40614",        "ujung berung": "40611",        "gedebage": "40294",        "panyileukan": "40614",        "cinambo": "40294",        "mandalajati": "40195",        // Surabaya        "karang pilang": "60221",        "jambangan": "60232",        "gayungan": "60235",        "wonocolo": "60239",        "tenggilis mejoyo": "60292",        "gunung anyar": "60294",        "rungkut": "60293",        "sukolilo": "60117",        "mulyorejo": "60112",        "gubeng": "60281",        "wonokromo": "60243",        "dukuh pakis": "60225",        "wiyung": "60227",        "lakarsantri": "60211",        "sambikerep": "60217",        "tandes": "60187",        "sukomanunggal": "60188",        "sawahan": "60252",        "tegalsari": "60262",        "genteng": "60271",        "tambaksari": "60136",        "kenjeran": "60129",        "simokerto": "60143",        "semampir": "60151",        "pabean cantian": "60163",        "bubutan": "60174",        "krembangan": "60179",        "asemrowo": "60182",        "benowo": "60198",        "pakal": "60195",        "bulak": "60124",        // Yogyakarta        "mantrijeron": "55143",        "kraton": "55133",        "mergangsan": "55153",        "umbulharjo": "55165",        "kotagede": "55173",        "gondokusuman": "55221",        "danurejan": "55211",        "pakualaman": "55111",        "gondomanan": "55121",        "ngampilan": "55261",        "wirobrajan": "55252",        "gedongtengen": "55244",        "jetis": "55231",        "tegalrejo": "55244",                // Semarang        "semarang tengah": "50134",        "semarang utara": "50174",        "semarang timur": "50126",        "gayamsari": "50248",        "genuk": "50117",        "pedurungan": "50192",        "semarang selatan": "50245",        "candisari": "50253",        "gajahmungkur": "50232",        "tembalang": "50275",        "banyumanik": "50264",        "gunungpati": "50229",        "semarang barat": "50146",        "mijen": "50217",        "ngaliyan": "50186",        "tugu": "50151",                // Malang        "blimbing": "65121",        "klojen": "65111",        "kedungkandang": "65132",        "sukun": "65148",        "lowokwaru": "65141"    };    // Buat database terbalik (kode pos -> kecamatan)    const reversedPostalData = {};    for (const [district, code] of Object.entries(postalCodeData)) {        reversedPostalData[code] = district;    }    // ========================    // Nama Suggestions    // ========================    const nameInput = document.getElementById('name');    const nameSuggestions = document.getElementById('name-suggestions');        if (nameInput && nameSuggestions) {        const nameSuggestionsData = {            'a': ['Ahmad', 'Aditya', 'Andi', 'Alya', 'Anisa'],            'b': ['Budi', 'Bambang', 'Bayu', 'Bella', 'Bunga'],            'c': ['Cahya', 'Citra', 'Calvin', 'Cinta', 'Cakra'],            'd': ['Dani', 'Dika', 'Dimas', 'Dewi', 'Dinda'],            'e': ['Eka', 'Edi', 'Erik', 'Ella', 'Eva'],            'f': ['Fajar', 'Faisal', 'Ferdi', 'Fitri', 'Fanny'],            'g': ['Gilang', 'Galih', 'Gita', 'Gina', 'Gunawan'],            'h': ['Hadi', 'Hendra', 'Hasan', 'Hana', 'Hesti'],            'i': ['Irfan', 'Indra', 'Ilham', 'Ira', 'Indah'],            'j': ['Joko', 'Joni', 'Julian', 'Jihan', 'Jasmine'],            'k': ['Kurnia', 'Krisna', 'Kevin', 'Kartika', 'Kusuma'],            'l': ['Lutfi', 'Lukman', 'Leo', 'Linda', 'Lina'],            'm': ['Maulana', 'Muhammad', 'Mahendra', 'Maya', 'Mira'],            'n': ['Nugraha', 'Nur', 'Nanda', 'Nova', 'Nita'],            'o': ['Okta', 'Oki', 'Oscar', 'Olivia', 'Ocha'],            'p': ['Putra', 'Pratama', 'Pandu', 'Putri', 'Puspita'],            'q': ['Qori', 'Qomariah', 'Qisya', 'Qiara', 'Qisthi'],            'r': ['Rizki', 'Rama', 'Randi', 'Rina', 'Rahma'],            's': ['Surya', 'Sandi', 'Satria', 'Sinta', 'Sari'],            't': ['Taufik', 'Tegar', 'Tri', 'Tika', 'Tina'],            'u': ['Umar', 'Utama', 'Utomo', 'Umi', 'Ulfah'],            'v': ['Vino', 'Vicky', 'Valdi', 'Vina', 'Vera'],            'w': ['Wisnu', 'Wahyu', 'Wawan', 'Wulan', 'Widya'],            'x': ['Xavier', 'Xaverius', 'Xena', 'Ximena', 'Xander'],            'y': ['Yusuf', 'Yoga', 'Yuda', 'Yani', 'Yuni'],            'z': ['Zaki', 'Zaenal', 'Zidan', 'Zahra', 'Zulfa']        };                nameInput.addEventListener('input', function() {            const value = this.value.trim().toLowerCase();            nameSuggestions.innerHTML = '';                        if (value.length === 0) {                nameSuggestions.style.display = 'none';                return;            }                        const firstChar = value[0];            const suggestions = nameSuggestionsData[firstChar] || [];                        let hasMatches = false;                        suggestions.forEach(suggestion => {                if (suggestion.toLowerCase().startsWith(value)) {                    hasMatches = true;                    const div = document.createElement('div');                    div.className = 'suggestion-item';                    div.textContent = suggestion;                    div.addEventListener('click', function() {                        nameInput.value = suggestion;                        nameSuggestions.style.display = 'none';                    });                    nameSuggestions.appendChild(div);                }            });                        nameSuggestions.style.display = hasMatches ? 'block' : 'none';        });    }    // Hide name suggestions when clicking outside    document.addEventListener('click', function(e) {        if (nameSuggestions && e.target !== nameInput && !nameSuggestions.contains(e.target)) {            nameSuggestions.style.display = 'none';        }    });    // ========================    // Form Validation    // ========================    const registrationForm = document.getElementById('student-registration');    const emailInput = document.getElementById('email');    const emailError = document.getElementById('email-error');        if (emailInput && emailError) {        emailInput.addEventListener('blur', function() {            const email = this.value.trim();                        if (email && !validateEmail(email)) {                emailError.textContent = 'Format email tidak valid';                emailError.style.display = 'block';                this.classList.add('error');            } else {                emailError.style.display = 'none';                this.classList.remove('error');            }        });    }        if (registrationForm) {        registrationForm.addEventListener('submit', function(e) {            e.preventDefault();                        const name = document.getElementById('name').value.trim();            const nim = document.getElementById('nim').value.trim();            const course = document.getElementById('course').value;            const lecturer = document.getElementById('lecturer').value;            const email = emailInput ? emailInput.value.trim() : '';            const department = document.getElementById('department').value;                        if (!name || !nim || !course || !lecturer || !email || !department) {                showModal('Semua field harus diisi!');                return;            }                        if (email && !validateEmail(email)) {                showModal('Format email tidak valid!');                return;            }                        showModal('Registrasi berhasil!');            this.reset();        });    }        function validateEmail(email) {        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // ========================
    // Kode Pos Search
    // ========================
    const districtSearch = document.getElementById('district-search');
    const districtSuggestions = document.getElementById('district-suggestions');
    const directSearchBtn = document.getElementById('direct-search-btn');
    const postalResults = document.getElementById('postal-results');
    
    // District search with autocomplete
    if (districtSearch && districtSuggestions) {
        districtSearch.addEventListener('input', function() {
            const value = this.value.trim().toLowerCase();
            districtSuggestions.innerHTML = '';
            
            if (value.length < 2) {
                districtSuggestions.style.display = 'none';
                return;
            }
            
            const matchingDistricts = Object.keys(postalCodeData).filter(district => 
                district.includes(value)
            ).slice(0, 5); // Limit to 5 suggestions
            
            if (matchingDistricts.length > 0) {
                matchingDistricts.forEach(district => {
                    const div = document.createElement('div');
                    div.className = 'suggestion-item';
                    div.textContent = district.charAt(0).toUpperCase() + district.slice(1);
                    
                    div.addEventListener('click', function() {
                        districtSearch.value = district;
                        districtSuggestions.style.display = 'none';
                        
                        // Langsung cari setelah memilih kecamatan
                        searchDistrict(district);
                    });
                    
                    districtSuggestions.appendChild(div);
                });
                
                districtSuggestions.style.display = 'block';
            } else {
                districtSuggestions.style.display = 'none';
            }
        });
    }

    // Hide district suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (districtSuggestions && e.target !== districtSearch && !districtSuggestions.contains(e.target)) {
            districtSuggestions.style.display = 'none';
        }
    });
    
    // Direct search button
    if (directSearchBtn && districtSearch) {
        directSearchBtn.addEventListener('click', function() {
            const query = districtSearch.value.trim().toLowerCase();
            
            if (query.length < 2) {
                showModal('Masukkan minimal 2 karakter untuk pencarian');
                return;
            }
            
            searchDistrict(query);
        });
        
        // Enter key untuk pencarian
        districtSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                directSearchBtn.click();
            }
        });
    }

    // Postal code search
    const postalCodeSearch = document.getElementById('postal-code-search');
    const postalCodeSearchBtn = document.getElementById('postal-code-search-btn');

    if (postalCodeSearch && postalCodeSearchBtn) {
        postalCodeSearchBtn.addEventListener('click', function() {
            const query = postalCodeSearch.value.trim();
            
            if (!/^\d{5}$/.test(query)) {
                showModal('Masukkan 5 digit kode pos yang valid');
                return;
            }
            
            searchPostalCode(query);
        });
        
        postalCodeSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                postalCodeSearchBtn.click();
            }
        });
    }
    
    // Search functions
    function searchDistrict(query) {
        if (!postalResults) return;
        
        const matchingDistricts = Object.keys(postalCodeData).filter(district => 
            district.includes(query.toLowerCase())
        );
        
        if (matchingDistricts.length > 0) {
            postalResults.innerHTML = '';
            
            matchingDistricts.forEach(district => {
                const postalCode = postalCodeData[district];
                
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                
                const postalCodeHeader = document.createElement('h3');
                postalCodeHeader.textContent = `Kode Pos: ${postalCode}`;
                
                const districtInfo = document.createElement('p');
                districtInfo.textContent = `Kecamatan: ${district.charAt(0).toUpperCase() + district.slice(1)}`;
                
                resultItem.appendChild(postalCodeHeader);
                resultItem.appendChild(districtInfo);
                postalResults.appendChild(resultItem);
            });
            
            postalResults.style.display = 'block';
        } else {
            postalResults.innerHTML = '<div class="no-result">Kecamatan tidak ditemukan</div>';
            postalResults.style.display = 'block';
        }
    }

    function searchPostalCode(postalCode) {
        if (!postalResults) return;
        
        const district = reversedPostalData[postalCode];
        
        if (district) {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            
            const postalCodeHeader = document.createElement('h3');
            postalCodeHeader.textContent = `Kode Pos: ${postalCode}`;
            
            const districtInfo = document.createElement('p');
            districtInfo.textContent = `Kecamatan: ${district.charAt(0).toUpperCase() + district.slice(1)}`;
            
            resultItem.appendChild(postalCodeHeader);
            resultItem.appendChild(districtInfo);
            
            postalResults.innerHTML = '';
            postalResults.appendChild(resultItem);
            postalResults.style.display = 'block';
        } else {
            postalResults.innerHTML = '<div class="no-result">Kode pos tidak ditemukan</div>';
            postalResults.style.display = 'block';
        }
    }

    // ========================
    // Tabs Navigation
    // ========================
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show selected content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === target) {
                    content.classList.add('active');
                }
            });
            
            // Reset results when switching tabs
            if (postalResults) {
                postalResults.style.display = 'none';
            }
        });
    });

    // ========================
    // Modal Functionality
    // ========================
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const modalOkBtn = document.getElementById('modal-ok');
    const closeBtn = document.querySelector('.close-btn');
    
    function showModal(message) {
        if (!modal || !modalMessage) return;
        
        modalMessage.textContent = message;
        modal.style.display = 'block';
    }
    
    function closeModal() {
        if (!modal) return;
        modal.style.display = 'none';
    }
    
    if (modalOkBtn) {
        modalOkBtn.addEventListener('click', closeModal);
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Close modal on outside click
    window.addEventListener('click', function(e) {
        if (modal && e.target === modal) {
            closeModal();
        }
    });
});