import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./core/layout').then(m => m.Layout),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { 
        path: 'dashboard', 
        loadComponent: () => import('./features/dashboard').then(m => m.Dashboard) 
      },
      { 
        path: 'insumos', 
        loadComponent: () => import('./features/insumos/insumos-list').then(m => m.InsumosList) 
      },
      { 
        path: 'produtos', 
        loadComponent: () => import('./features/produtos/produtos-list').then(m => m.ProdutosList) 
      },
      { 
        path: 'produtos/novo', 
        loadComponent: () => import('./features/produtos/produto-form').then(m => m.ProdutoForm) 
      },
      { 
        path: 'produtos/:id/editar', 
        loadComponent: () => import('./features/produtos/produto-form').then(m => m.ProdutoForm) 
      },
      { 
        path: 'producoes', 
        loadComponent: () => import('./features/producoes/producoes-list').then(m => m.ProducoesList) 
      },
      { 
        path: 'producoes/nova', 
        loadComponent: () => import('./features/producoes/producao-form').then(m => m.ProducaoForm) 
      }
    ]
  }
];
