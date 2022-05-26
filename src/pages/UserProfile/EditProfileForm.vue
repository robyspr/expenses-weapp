<template>
  <card>
    <h4 slot="header" class="card-title">New Expense</h4>
    <form>
      <b-button v-b-toggle:my-collapse>
        <span class="when-open">Ganancia</span><span class="when-closed">Gasto</span>
      </b-button>

      <div class="row">
        <div class="col-md-5">
          <base-input required type="number"
                    label="Amount"
                    placeholder="Add the expense's amount"
                    v-model="expense.amount">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text"
                    label="Detail"
                    placeholder="What's the expense about?"
                    v-model="expense.detail">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="date"
                    label="Date"
                    placeholder="date"
                    v-model=expense.date>
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-5">
          <label for="mop">Method of Payment</label>
          <b-form-select required v-model="expense.selectedMethod" id="mop" :options="expense.optionsMethods" value-field="value" text-field="text">
          </b-form-select>
        </div>
      </div>

      <b-collapse visible id="my-collapse">
        <div class="row">
          <div class="col-md-6">
            <label for="type">Type</label>
            <b-form-select v-model="expense.selectedType" id="type" :options="expense.optionTypes" value-field="value" text-field="text">
            </b-form-select>
          </div>
        </div>
      </b-collapse>

      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="uploadExpense">
          Upload expense
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'
  import ExpensesDataService from "../../services/expensesDataService";
  export default {
    components: {
      Card
    },
    data () {
      return {
        expense: {
          amount: null,
          detail: '',
          date: new Date().toLocaleDateString('sv'),
          selectedMethod: 'null',
          optionsMethods: [
            { text: 'Mercado Pago', value: 'MP' },
            { text: 'Banco Macro', value: 'BM' },
            { text: 'Banco BBVA', value: 'BB' },
            { text: 'Efectivo', value: 'E' }
          ],
          selectedType: 'null',
          optionTypes: [
            { text: 'Food', value: '1' },
            { text: 'Transportation', value: '2' },
            { text: 'Uni', value: '3' }
          ]
        },
        showDismissibleAlert: false
      }
    },
    methods: {
      uploadExpense () {
        alert('Your data: ' + JSON.stringify(this.expense));
        var data = {
          amount: this.expense.amount,
          detail: this.expense.detail,
          date: this.expense.date,
          mop: this.expense.selectedMethod,
          type: this.expense.selectedType
        };
        ExpensesDataService.create(data).
        then(response => {
          this.submited = true;
        }).catch(e => {
          console.log(e);
        });
        this.expense = {};
        this.showDismissibleAlert = true;
        this.$emit('expenseUploaded',this.showDismissibleAlert);
      }
    }
  }

</script>
<style>

</style>
