/**
 * Script principal para o site de perfil acadêmico
 * Funcionalidades: Navegação, busca, interatividade
 */

(function() {
    'use strict';

    // ============================================
    // INICIALIZAÇÃO
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        initNavigation();
        initSearch();
        initCurrentYear();
        initSmoothScroll();
    });

    // ============================================
    // NAVEGAÇÃO
    // ============================================
    function initNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = {
            'about': document.getElementById('about'),
            'advisees': document.getElementById('advisees')
        };

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                
                // Atualizar link ativo
                navLinks.forEach(nl => nl.classList.remove('active'));
                this.classList.add('active');
                
                // Mostrar/ocultar seções
                if (targetId === 'about') {
                    showSection('about');
                    hideSection('advisees');
                } else if (targetId === 'advisees') {
                    showSection('advisees');
                    hideSection('about');
                }
                
                // Scroll suave para a seção
                if (sections[targetId]) {
                    sections[targetId].scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    function showSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.removeAttribute('hidden');
            section.setAttribute('aria-hidden', 'false');
        }
    }

    function hideSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.setAttribute('hidden', 'true');
            section.setAttribute('aria-hidden', 'true');
        }
    }

    // ============================================
    // BUSCA
    // ============================================
    function initSearch() {
        const searchButton = document.querySelector('.search-button');
        
        if (searchButton) {
            searchButton.addEventListener('click', function() {
                // Implementação básica - pode ser expandida com modal de busca
                const searchTerm = prompt('Digite o termo de busca:');
                if (searchTerm) {
                    performSearch(searchTerm);
                }
            });
        }

        // Suporte para atalho de teclado (Ctrl/Cmd + K)
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                searchButton?.click();
            }
        });
    }

    function performSearch(term) {
        // Busca simples no conteúdo da página
        const searchableText = document.body.innerText.toLowerCase();
        const searchTerm = term.toLowerCase();
        
        if (searchableText.includes(searchTerm)) {
            // Destacar resultados (implementação básica)
            highlightSearchTerm(term);
            alert(`Termo "${term}" encontrado na página.`);
        } else {
            alert(`Termo "${term}" não encontrado.`);
        }
    }

    function highlightSearchTerm(term) {
        // Remove destaques anteriores
        const existingHighlights = document.querySelectorAll('.search-highlight');
        existingHighlights.forEach(el => {
            const parent = el.parentNode;
            parent.replaceChild(document.createTextNode(el.textContent), el);
            parent.normalize();
        });

        // Implementação básica de highlight
        // Para uma implementação completa, seria necessário usar uma biblioteca
        // como Mark.js ou implementar um walker de nós do DOM
        console.log('Buscando por:', term);
    }

    // ============================================
    // ANO ATUAL NO FOOTER
    // ============================================
    function initCurrentYear() {
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    // ============================================
    // SCROLL SUAVE
    // ============================================
    function initSmoothScroll() {
        // Garantir que links internos usem scroll suave
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        
        internalLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    // ============================================
    // ACESSIBILIDADE - NAVEGAÇÃO POR TECLADO
    // ============================================
    document.addEventListener('keydown', function(e) {
        // ESC para fechar modais (se implementados no futuro)
        if (e.key === 'Escape') {
            // Lógica para fechar modais
        }
    });

    // ============================================
    // DETECÇÃO DE REDUÇÃO DE MOVIMENTO
    // ============================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Desabilitar animações se o usuário preferir
        document.documentElement.style.setProperty('--transition-fast', '0s');
        document.documentElement.style.setProperty('--transition-normal', '0s');
    }

    // ============================================
    // LAZY LOADING DE IMAGENS (se necessário)
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // UTILITÁRIOS
    // ============================================
    
    /**
     * Debounce function para otimizar eventos
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Throttle function para limitar frequência de eventos
     */
    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // ============================================
    // EXPORTAR FUNÇÕES ÚTEIS (se necessário)
    // ============================================
    window.ProfileSite = {
        showSection,
        hideSection,
        performSearch
    };

})();
